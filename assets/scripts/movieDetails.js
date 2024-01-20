function convertDate(date) {
    const slice = date.split("-");

    const dateFormated = `${slice[2]}/${slice[1]}/${slice[0]}`;
    return dateFormated;
}

function displayMovieDetail(movieDetail) {

    const movieDetailContainer = document.getElementById('movieDetail');
    movieDetailContainer.innerHTML = "";

    const genres = movieDetail.genres.map((genre) => {
        return genre.name;
    })

    if (movieDetail) {
        const movieDetailsElement = document.createElement('div');
        movieDetailsElement.classList.add('movie-details');

        // Movie poster
        movieDetailsElement.innerHTML = `
        <div class="movie-poster">
            <img src=${movieDetail.image_url} alt="Imagem do filme ${movieDetail.name}">
        </div>
        <div class="movie-info">
            <h1>${movieDetail.name}</h1>
            <strong>Nota: ${movieDetail.rating}</strong>
            
            <p>
            <strong>Duração: </strong> ${movieDetail.duration} min
        </p>
        <p>
            <strong>Data de lançamento: </strong>${convertDate(movieDetail.released_at)}
        </p>
        <p>
            <strong>Descrição: </strong> ${movieDetail.description}
        </p>
        <p>
            <strong>Gênero: </strong> ${genres.join(", ")}
        </p>

        </div>
        `;
        movieDetailContainer.appendChild(movieDetailsElement);
    }
}


async function getMovie() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const response = await fetch(`https://1089-2804-14d-1282-96d1-6bed-1637-2dd4-9086.ngrok-free.app/api/v1/movies/${id}/`, {
        method: "GET",
        headers: {
        "ngrok-skip-browser-warning": "69420"
    }
    }
    , )
    const movieResponse = await response.json();

    displayMovieDetail(movieResponse);
    console.log(movieResponse);


}

getMovie();