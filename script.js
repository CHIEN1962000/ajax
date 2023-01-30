// khai bao cac bien de luu gia tri

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// lay gia tri tu api

async function getPopularMovies() {
    let data = [];
    try {
        const response = await fetch(API_URL)
        const responseData = await response.json()
        data = responseData?.results
    } 
    catch (error) {
        console.log(error)
    }
        return data
}

//Viết giao diện danh sách phim

const moviesDiv = document.getElementById("movies");

async function renderMovies() {
    const movies = await getPopularMovies()
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}
    
function renderSingleMovie(movie) {
    return (
    `
    <div class="col-4 col-lg-3 col-xl-2 p-1">
    <img src="${IMG_URL + movie?.poster_path}" class="img-fluid" >
    </div>
    `
    )
}
    
renderMovies()