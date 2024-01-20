let movies = [];

function addMovieToGrid(id, title,description,poster) {
    const movieGrid = document.getElementById('movie-grid');

    const movieElement = document.createElement('article');

    movieElement.classList.add('movie');

    movieElement.innerHTML = `
    <img src="${poster}" alt="Filme"/>
    <div class="movie-details">
        <h2>${title}</h2>
        <p>${description}</p>
    </div>
    `;

    movieGrid.appendChild(movieElement);
};




async function getMovies() {

    try {
        const response = await fetch("https://1089-2804-14d-1282-96d1-6bed-1637-2dd4-9086.ngrok-free.app/api/v1/movies/", {
            method: "GET",
        headers: {
            "ngrok-skip-browser-warning": "69420"
        }
        }
        , )

    const moviesResponse = await response.json();

    console.log(response);
    console.log(moviesResponse);

    moviesResponse.results.forEach( (movie) => {
        movies.push({
            id: movie.id,
            title: movie.name,
            description: movie.description,
            poster: movie.image_url,
        })
    })

    movies.forEach((movie) => {
        addMovieToGrid(movie.id, movie.title, movie.description, movie.poster)
    });

    console.table(movies)
    } catch (error) {
        console.log(error);
    }
    
}
getMovies();


