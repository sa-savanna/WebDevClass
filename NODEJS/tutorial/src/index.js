// const path = require('path');

// let currentDirectory = path.resolve(__dirname)

// console.log(currentDirectory)

const intec = require('./components/intecbrussel')
const users = require('./components/users')
intec(6,7)

console.log('hello webpack')

let jsonObj = users();
jsonObj.then(data=>{
   data.forEach((user)=>{
       console.log(user.id)
       document.querySelector('.card-columns').innerHTML+=`
       <div class="card">
                        <img class="card-img-top" src="holder.js/100x180/" alt="">
                        <div class="card-body">
                            <h4 class="card-title">${user.name}</h4>
                            <p class="card-text">${user.email}</p>
                        </div>
                    </div>
       
       `
       /*
       <div class="card">
                        <img class="card-img-top" src="holder.js/100x180/" alt="">
                        <div class="card-body">
                            <h4 class="card-title">Title</h4>
                            <p class="card-text">Text</p>
                        </div>
                    </div>*/
   })
})