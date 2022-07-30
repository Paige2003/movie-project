const movieListEl = document.querySelector('.movies');

async function search(event){
    const val = event.target.value
    renderMovie(val)
}

async function searchWithButton(event){
    const val = event.target.value
    renderMovie(val)
}

async function renderMovie(val){
    const movies = await fetch(`https://www.omdbapi.com/?apikey=e9fab4fe&s=${val}`);
    const moviesData = await movies.json()
   
    movieListEl.innerHTML = [moviesData].map(movie => movieHTML(movie)).join('');
    
}

function movieHTML(movie){
    return `<div class="movies">
        <figure class="movie__img--wrapper">
            <img class="movie__img" src="${movie.Poster}" alt="">
        </figure>
        <h2 class="movie__title">${movie.Title}, ${movie.Year}</h2>
    </div>`;
}

