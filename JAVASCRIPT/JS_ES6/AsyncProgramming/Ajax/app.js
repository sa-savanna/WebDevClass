/*

What's Ajax
* Send and receive data as async
XmlHttpRequest
let obj  = new XmlHttpRequest();
JSON/XML


HTTP status
- 200 : OK
- 403 : Forbidden
- 404: NotFound
- 505: Internal Server ERror


qerty.com/intec
404

*/
const button = document.querySelector('#button')
button.addEventListener('click', (e) => {
    //getData('message.txt')
    getData('data.json')
})

let getData =(url)=>{
    const xhr = new XMLHttpRequest(); // new
    // xhr.onload = function () {
    //     console.log(this.response) 
    //     console.log(this.readyState)
    //     console.log(this.response)
    // }
    xhr.onload= function(){
        
        if(xhr.readyState===4 && xhr.status === 200){
            console.log(this.response)
            localStorage.setItem('users',this.response)
        }
    }

    xhr.open("GET", url, true); // new
    xhr.send(); // new
}





// open method of XMLHttpRequest
// 3 args 1- http method

/*

GET - 
POST - send data to web server
DELETE - 
PUT
PATCH

*/