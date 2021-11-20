/*
Author : Arnav Chavan
Date : 11/19/2021
*/
const API_KEY = 'api_key=16e94afbdabf5c00e7a7b64194bb91a5';
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/movie/now_playing?' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');
 

getMovies(API_URL);
function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        
        showMovies(data.results);
    })
}



function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
                <h3>Overview</h3>
                ${overview}
        </div>
        
        `

        main.appendChild(movieEl);
    })
}




function getColor(vote) {
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}