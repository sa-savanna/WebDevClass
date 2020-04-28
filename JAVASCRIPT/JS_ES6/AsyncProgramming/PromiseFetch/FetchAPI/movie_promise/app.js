const bgImage = document.querySelector('.bg-image');
const cardBody = document.querySelector('.card-body');
const secondBody = document.querySelector('.secondBody');
const search = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-icon')
const others = document.querySelector('.others');

class MovieSearchEngine {
    constructor(query) {
        this.apiKey = "07a61de5b731a869bc9cec8e25d2c8a8"
        this.query = query
        this.api = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}`
    }


/*



*/

    search(myApi) {
      
        let fetchData = fetch(myApi)
        .then((response)=>{
            var data = response.json()
            return data;
        })
        .then((result)=>{
            console.log('fetching data...')
            console.log(result)
            let newData = result.results
            if(newData !=undefined){
                newData.filter(this.BestOfMovie).map((best)=>{
                    if(best.popularity >=7){
                        bgImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${best.poster_path})`
                        cardBody.style.backgroundImage = `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${best.poster_path})`
                        cardBody.children[0].innerHTML = best.title
                        secondBody.children[0].children[0].innerHTML = best.title
                        secondBody.children[0].children[1].innerHTML = best.release_date
                        secondBody.children[0].children[3].innerHTML = `Original Language: ${best.original_language.toUpperCase()}`
                        secondBody.children[0].children[2].innerHTML = best.overview;
                        secondBody.children[1].children[0].children[0].innerHTML = best.vote_average
                    }
                })
                newData.forEach((movie)=>{
                    this.movieUI(movie);
    
                })
            }
        })
        
        
    }

    BestOfMovie(movie){
        return movie.vote_average>7
    }

    elGen(t) {
        return document.createElement(t);
    }

    movieUI(obj) {
        const divCol = this.elGen('div')
        divCol.className = "col-xs-3 p-2"
        const divCard = this.elGen('div');
        divCard.className = "card"
        divCard.style.width = "18rem";
        const divCardBody = this.elGen('div')
        divCardBody.className = "card-body text-light"
        divCardBody.style.backgroundImage = `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${obj.poster_path})`
        const cardTitle = this.elGen('h5');
        cardTitle.innerHTML = obj.title
        cardTitle.className = "card-title otherTextStyle";
        const watchOnline = this.elGen('a')
        watchOnline.className = "btn btn-primary"
        watchOnline.innerHTML = "Watch Online"
        watchOnline.href = "#"
        divCardBody.appendChild(cardTitle)
        divCardBody.appendChild(watchOnline);
        divCard.appendChild(divCardBody);
        divCol.appendChild(divCard)
        others.appendChild(divCol)
    }

    
}

searchBtn.addEventListener('click', function (e) {
    others.innerHTML=""
     let movie = new MovieSearchEngine(search.value)
    //   console.log(search.value)
        movie.search(movie.api)
        
  

})