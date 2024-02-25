document.addEventListener("DOMContentLoaded", async function () {
    const genreSelect = document.getElementById("genre");
    const movieList = document.getElementById("movie-list");

const genres = ["All", "Action", "Comedy", "Drama", "Horror", "Kids"];


const allOption = document.createElement("option");
allOption.value = "All";
allOption.textContent = "All";
allOption.classList.add("all");

allOption.addEventListener("click", filterAndRenderList);


genres.forEach((genre) => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  genreSelect.appendChild(option);
});

    filterAndRenderList();

    genreSelect.addEventListener("change", filterAndRenderList);

    async function filterAndRenderList() {
        const selectedGenre = genreSelect.value.toLowerCase();
    
        const response = await fetch("https://api.noroff.dev/api/v1/square-eyes");
        const movies = await response.json();
    
        let filteredMovies;
    
        if (selectedGenre === "all") {
            filteredMovies = movies;
        } else {
            filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === selectedGenre);
        }

        renderMovieList(filteredMovies);
    }

    function renderMovieList(movies) {
        movieList.innerHTML = "";

        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            movieCard.innerHTML = `
                <img class="movie-image" src="${movie.image}" alt="${movie.title}" onclick="openMoviePage('${movie.id}')">
                <h2 class="movie-title">${movie.title}</h2>
                <p class="movie-price">${getPriceDisplay(movie)}</p>
            `;

            movieList.appendChild(movieCard);
        });
    }

    window.openMoviePage = function (movieId) {
        window.location.href = `product.html?id=${movieId}`;
    };

    function getPriceDisplay(movie) {
        if (movie.discountedPrice) {
            return `Price: ${movie.price} (Discounted: ${movie.discountedPrice})`;
        } else {
            return `Price: ${movie.price}`;
        }
    }
});
