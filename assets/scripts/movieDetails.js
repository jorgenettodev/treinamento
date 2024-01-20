let movie = [];

function displayMovieDetail() {
    const movieDetailContainer = document.getElementById('movieDetail');
    movieDetailContainer.innerHTML = "";

    const movieDetail = movie[0];

    const genres = movieDetail.genres.map((genre) => {
        return genre.name;
    })

    if (movieDetail) {
        const movieDetailsElement = document.createElement('div');
        movieDetailsElement.classList.add('movie-details');

        // Movie poster
        movieDetailsElement.innerHTML = `
        <div class="movie-poster">
            <img src=${movieDetail.image_url} alt="Imagem do filme ${movieDetail.name}"/>
        </div>
        <div class="movie-info">
            <h1>${movieDetail.name}</h1>
            <strong>Nota: ${movieDetail.rating}</strong>
        </div>
        <p><strong>Duração: ${movieDetail.duration} min</strong></p>
        <p><strong>Data de lançamento: ${movieDetail.released_at}</strong></p>
        <p><strong>Descrição: </strong>${movieDetail.description}</p>
        <p><strong>Gênero: </strong>${genres.join(", ")}</p>



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

    movie.push(movieResponse);
    displayMovieDetail();
    console.log(movieResponse);


}

getMovie();