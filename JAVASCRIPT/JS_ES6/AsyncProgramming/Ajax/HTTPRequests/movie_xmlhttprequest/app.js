// html elements
const bgImage = document.querySelector('.bg-image');
const cardBody = document.querySelector('.card-body');
const secondBody = document.querySelector('.secondBody');
const search= document.querySelector('.search-box'); // input value
const searchBtn = document.querySelector('.search-icon');
const others = document.querySelector('.others');

class MovieSearchEngine{
    constructor(query){
        this.xhr = new XMLHttpRequest();
        this.apiKey = "07a61de5b731a869bc9cec8e25d2c8a8"
        this.query = query;
        this.api= `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}`
        
    }

    search(callback) {
        this.xhr.open('GET', this.api); // connection is open
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText); // request done
            } else {
                callback('GetReq: Fail', null)
            }
        }
        this.xhr.send();
    }

    elGen(t){
        return document.createElement(t);
    }

    movieUI(obj){
        const divCol = this.elGen('div');
        divCol.className="col-xs-3 p-2"
        
        const divCard = this.elGen('div');
        divCard.className="card"
        divCard.style.width="18rem;"

        const divCardBody = this.elGen('div');
        divCardBody.className="card-body text-light"
        // divCardBody.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${obj.backdrop_path})`

        if(obj.poster_path === null || obj.poster_path === undefined){
            divCardBody.style.backgroundImage = `url(https://i.imgur.com/Pdf56J5.jpg)`
        }else{
            divCardBody.style.backgroundImage = `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${obj.poster_path})`
        }

        const cardTitle = this.elGen('h5')
        cardTitle.className="card-title"
        cardTitle.innerHTML = obj.title;

        const watchOnline = this.elGen('a');
        watchOnline.className="btn btn-primary"
        watchOnline.innerHTML="Watch Online"
        watchOnline.href="#"

        // 1
        divCardBody.appendChild(cardTitle)
        divCardBody.appendChild(watchOnline)

        // 2
        divCard.appendChild(divCardBody)

        // 3
        divCol.appendChild(divCard)
        others.appendChild(divCol)
        console.log(divCol)
    }


    BestOfMovies(movie){
        return movie.vote_average>7
    }


}

searchBtn.addEventListener('click',function(e){
    let movie = new MovieSearchEngine(search.value)
    console.log(movie.api)
   // console.log(search.value)
    movie.search((err,res)=>{
        if(err === null){
            others.innerHTML=""
            let response = JSON.parse(res)
            let results = response.results;
            results.forEach((n)=>{
                console.log(n)
                movie.movieUI(n)
            })
            // featured movie
            results.filter(movie.BestOfMovies).map((n,i)=>{
                if(n.popularity>8){
                    bgImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${n.poster_path})`
                    cardBody.style.backgroundImage = `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${n.poster_path})`
                    cardBody.children[0].innerHTML=n.title;
                    secondBody.children[0].children[0].innerHTML=n.title
                    secondBody.children[0].children[1].innerHTML=`${n.release_date} (${n.original_language.toUpperCase()})`;
                    secondBody.children[0].children[2].innerHTML=n.overview
                    secondBody.children[0].children[3].innerHTML=`Original Title: ${n.original_title}`
                    secondBody.children[1].children[0].children[0].innerHTML=n.vote_average
                }
            })

        }else{
            console.log(err)
        }
    })
    
    e.preventDefault()
})