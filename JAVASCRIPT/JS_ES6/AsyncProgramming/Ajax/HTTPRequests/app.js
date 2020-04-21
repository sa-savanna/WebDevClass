const cardCol = document.querySelector('.card-columns')
const buttons = document.querySelectorAll('button');
const [get] = buttons;
const API_Url = "http://localhost:5005/comments";
console.log(buttons)
class Request { 

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // GET REQUEST

    get(url,callback){
        this.xhr.open('GET',url); // connection is open
        this.xhr.onload = ()=>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText); // request done
            }else{
                callback('GetReq: Fail',null)
            }
        }
        this.xhr.send();
    }

    post(){

    }

    delete(){

    }

    update(){

    }
}

const req = new Request();

get.addEventListener('click',function(e){
    req.get(API_Url,function(err,response){
        if(err === null){
            let localData = JSON.parse(response);
            localData.forEach(function(comment){
         
                cardCol.innerHTML+=`
            <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="">
                    <div class="card-body">
                      <h4 class="card-title">${comment.email}</h4>
                      <p class="card-text">${comment.body}</p>
                    </div>
                  </div>
            `
            })
            // success request
            
            console.log(typeof localData)
        }else{
            // ERror
            console.log(err)
        }
    })
    e.preventDefault()
})
