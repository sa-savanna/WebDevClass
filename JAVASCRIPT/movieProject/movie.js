const inputName = document.querySelectorAll("input")[0];
const inputRating = document.querySelectorAll("input")[1];
const inputLink = document.querySelectorAll("input")[2];
const addMovieBtn = document.querySelectorAll("button")[0];
const tableBody = document.querySelector("#films");
const filmForm = document.querySelector('#film-form');

EventListeners();

function EventListeners() {
    filmForm.addEventListener('click', addMovie);
    tableBody.addEventListener("click", removeElement);
    document.addEventListener('DOMContentLoaded', loadAllList);
}


function deleteFromLocalStorage(movie){
    let movies = getDataFromStorage();
    for (var i = movies.length - 1; i >= 0; --i) {
        if (movies[i].title == movie) {
            movies.splice(i,1);
        }
    }
    localStorage.setItem('movies',JSON.stringify(movies))
}

function addMovie(e) {
    console.log(this)
	let items = getDataFromStorage();
    
    var Title = inputName.value;
    var Rating = inputRating.value;
    var Image = inputLink.value;

    var newMovie = {
        title: Title,
        image: Image,
        rating: Rating,
    };

    if (e.target.id == 'add-movie') {
        
        if (Image === "" && Title==="" && Rating ==="") {
            displayMessage('');
        } else {
            items.push(newMovie);
			showMovies(newMovie);
            
            //addDataToStorage(newMovie);
            localStorage.setItem('items',JSON.stringify(items))
        }
        
    }
    
    e.preventDefault();
}



function showMovies(item) {
    // items.forEach(function (item) {
        
    // })

    tableBody.innerHTML += `
            <tr>
                <td><img src='${item.image}' class="img-fluid img-thumbnail w-50"></td>
                <td>${item.title}</td>
                <td>${item.rating}</td>
                <td><a href="#" id="delete-film" class="btn btn-danger">Delete Movie</a></td>
            </tr>`

}


function removeElement(event) {
    if (event.target.id == 'delete-film') {
        event.target.parentElement.parentElement.remove();
    
        deleteFromLocalStorage(event.target.parentElement.parentElement.children[1].textContent)
    }
    event.preventDefault();
}





// addImg: "https://static.puzzle-movies.com/img400x600/movies/star-wars-the-rise-of-skywalker-2019/poster_orig.jpg",
//title: "Star Wars: The Rise of Skywalker",
//Rating: "6.2/10",
//     
//addImg: "https://static.puzzle-movies.com/img400x600/movies/joker-2019/poster_orig.jpg",
// title: "Joker",
// Rating: "8.2/10",

//  addImg: "https://static.puzzle-movies.com/img400x600/movies/once-upon-a-time-in-hollywood-2019/poster_orig.jpg",
// title: "Once Upon a Time... in Hollywood",
//  Rating: "7.7/10",

// addImg: "https://static.puzzle-movies.com/img400x600/movies/forrest-gump-1994/poster_orig.jpg",
// title: "Forrest Gump",
//  Rating: "8.9/10",



function loadAllList() {   //введенные данные не исчезaют после перезагрузки
    let items = getDataFromStorage();
    items.forEach(function (yay) {
        showMovies(yay)
    })
}


function getDataFromStorage() {

    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function addDataToStorage(newMovie) {

    let items = getDataFromStorage();
    items.push(newMovie);

    localStorage.setItem('items', JSON.stringify(items))
}

// function deleteItemFromStorage(deleteList, index) {
//     let todos = getItemFromStorage(); // return obj todos
//     todos.forEach(function (yay) {
//         if (yay === deleteList) {
//             list.splice(index, 1);
//         }
//     });
//     localStorage.setItem('list', JSON.stringify(list));
// }


