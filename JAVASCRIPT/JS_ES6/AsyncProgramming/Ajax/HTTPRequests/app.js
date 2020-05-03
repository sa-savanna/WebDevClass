const cardCol = document.querySelector('.card-columns')
const buttons = document.querySelectorAll('button');
const [get, _post, _del, update] = buttons;
const API_Url = "http://localhost:3000/comments";
const updateToolbar = document.querySelectorAll('.modal-footer')
const title = document.getElementById('recipient-name');
const body = document.getElementById('message-text');
const [sendUpdate] = updateToolbar

class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }


    // GET REQUEST

    get(url, callback) {
        this.xhr.open('GET', url); // connection is open
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText); // request done
            } else {
                callback('GetReq: Fail', null)
            }
        }
        this.xhr.send();
    }

    post(api, data, callback) {
        this.xhr.open('POST', api);
        this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        this.xhr.onload = () => {
            if (this.xhr === 201) {
                // ok
                callback(null, this.xhr.responseText)
            } else {
                // error
                callback('post request failed', null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }



    delete(api, callback) {

        this.xhr.open("DELETE", api);
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, "deleted")
            } else {
                callback('fail', null)
            }
        }

        this.xhr.send();
    }

    // update method

    update(api, data, callback) {
        this.xhr.open('PUT', api);
        this.xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {

                // success
                callback(null, this.xhr.responseText)
            } else {
                callback("Put Request Error", null);
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const req = new Request();




const getCurrentUser =(userID)=>{
    return userID
}

get.addEventListener('click', function (e) {
    cardCol.innerHTML=""
    req.get(API_Url, function (err, response) {
        if (err === null) {
            let localData = JSON.parse(response);
            localData.forEach(function (comment) {

                cardCol.innerHTML += `
            <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="">
                    <div class="card-body">
                    <input id="number" type="hidden" value="${comment.id}">
                    <h4 class="card-title">${comment.email}</h4>
                      <p class="card-text">${comment.body}</p>
                    </div>
                    <button type="button" class="btn btn-primary updatebtn" data-toggle="modal" data-target="#exampleModal"
          data-whatever="@getbootstrap">UPDATE</button>
                  </div>
            `
            })
            // success request

            document.querySelectorAll('.updatebtn').forEach((button)=>{
                button.addEventListener('click',function(e){

                    
             let userID = getCurrentUser(e.target.previousElementSibling.children[0].value);
             sendUpdate.children[1].addEventListener('click',function(e){
                 let temp = {
                     id:userID,
                     email:title.value,
                     body:body.value
                 }
                 console.log(`${API_Url}/${userID}`)
                 req.update(`${API_Url}/${userID}`,temp,function(err,comment){
                     if(err === null){
                         // success

                         console.log(comment)
                     }else{
                         console.log(err)
                     }
                 })
             })
                    
                })
            })


        } else {
            // ERror
            console.log(err)
        }
    })
    
})

let data = {
    "postId": 1,
    "id": 12,
    "name": "intecbrussel",
    "email": "intec@garfield.biz",
    "body": "hello world."
}

_post.addEventListener('click', function (e) {
    req.post(API_Url, data, function (err, comment) {
        if (err === null) {
            console.log(comment)
        } else {
            // error
            console.log(err)
        }
    })
    e.preventDefault()
})

_del.addEventListener('click', function (e) {
    let url = API_Url + "/203";
    req.delete(url, function (err, res) {
        if (err === null) {
            console.log("Response: " + res)
        } else {
            console.log("Error: " + err)
        }
    })
    e.preventDefault()
    console.log('test')
})

/*

${API_Url}/7 => http://localhost:3000/comments/7

*/


update.addEventListener('click', function(e) {
    console.log('test')
    let payload = {
        postId: 2,
        id: 7,
        name: "Anonymous User",
        email: "test@test.com",
        body: "This is test body"
    }
    let getwithID = API_Url + "/7";
    req.update(getwithID, payload, function (err, comment) {
        if (err === null) {
            console.log(comment)
        } else {
            console.log(err)
        }
    })

    e.preventDefault()
})