const filmForm = document.querySelector('#film-form');
const coverImg = document.querySelector('#url');
const movieName = document.querySelector('#title');
const directorName = document.querySelector('#director');
const films = document.querySelector('#films');
EventListeners();
function EventListeners() {
    filmForm.addEventListener('click', addMovieUI);
    films.addEventListener('click',update);
    document.addEventListener('DOMContentLoaded',loadAllMovies);
}


function loadAllMovies(){
    let movies = getMoviesFromStorage();
    movies.forEach(function(movie){
        addMovie(movie.cover,movie.title,movie.director)
    })
}

function update(event){
    if(event.target.id==='update-film'){
        var img= prompt('enter an img url')
        var title = prompt('enter movie name')
        var director = prompt('enter director name');
        event.target.parentElement.parentElement.children[0].children[0].src=img;
        event.target.parentElement.parentElement.children[1].innerText=title;
        event.target.parentElement.parentElement.children[2].innerText=director;
    }else if(event.target.id==='delete-film'){
        event.target.parentElement.parentElement.remove();
        deleteMovieFromStorage(event.target.parentElement.parentElement.children[1].innerText)
        
        
    }
}


function deleteMovieFromStorage(deleteMovie, index){

    let movies =getMoviesFromStorage();
    movies.forEach(function(movie){
        if(movie.title === deleteMovie){
            movies.splice(index,1);
        }
    });

    localStorage.setItem('movies',JSON.stringify(movies));

}


function addMovieUI(event) {
    let newMovie = {
        cover: coverImg.value,
        title: movieName.value,
        director: directorName.value
    }


    if (event.target.id == 'add-movie') {
        console.log('hello')
        addMovie(coverImg.value, movieName.value, directorName.value);
        addMovieToStorage(newMovie);
    }
    event.preventDefault();
}

function getMoviesFromStorage(){
    let movies;
    if(localStorage.getItem('movies')===null){
        movies=[]
    }else{
        movies = JSON.parse(localStorage.getItem('movies'));
    }
    return movies;
}

function addMovieToStorage(NewMovie){
    let movies = getMoviesFromStorage();
    // let movies = [{cover:'1',title:'23',director:'asd'}]
    movies.push(NewMovie);
    localStorage.setItem('movies',JSON.stringify(movies))
}


function addMovie(movie_img, movie_title, movie_director) {

    var tr = CreateElement('tr');

    var img_td = CreateElement('td');
    var img = CreateElement('img');
    img.className = 'img-fluid img-thumbnail';
    img.src = movie_img;
    img_td.append(img)

    var title = CreateElement('td');
    title.innerText = movie_title;

    var director = CreateElement('td');
    director.innerText = movie_director;

    var buttons = CreateElement('td');

    var deleteFilm = CreateElement('a');
    deleteFilm.id = 'delete-film';
    deleteFilm.className = 'btn btn-danger mr-1';
    deleteFilm.innerText = 'Delete Movie'

    var updateFilm = CreateElement('a');
    updateFilm.id = 'update-film';
    updateFilm.className = 'btn btn-primary';
    updateFilm.innerText = 'Update Movie'

    buttons.append(deleteFilm)
    buttons.append(updateFilm);

    tr.append(img_td);
    tr.append(title);
    tr.append(director)
    tr.append(buttons)

    films.append(tr)
}


/*
<tr>
        <td><img src="https://i.picsum.photos/id/669/200/200.jpg" class="img-fluid img-thumbnail"></td>
        <td>Movie Title</td>
        <td>Movie Director</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger mr-1">Delete Movie</a><a href="#" id = "update-film" class = "btn btn-primary">Update Movie</a></td>
     
      </tr>
*/


function CreateElement(tagName) {
    return document.createElement(tagName);
}