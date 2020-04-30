// buttons and textarea
const [get,post,del,update] = document.querySelectorAll('button');
const output = document.getElementById('readoutput');
const APIURL = "http://localhost:3000/users"
const currenUser = "http://localhost:3000/users/7"

// FETCH - HTTP GET REQ METHOD
get.addEventListener('click',(e)=>{
    fetch(APIURL)
    .then(response=>{
        console.log(response.status)
        if(response.status === 404){
            console.log('endpoint not found')
        }
        return response.json()
    })
    .then(data=>{
      
        console.log(data)
        data.forEach((user)=>{
            console.log(user)
            console.log(user.email)
            console.log(user.pwd)
            console.log(user.id)
        })
    })
    .catch('Something went wrong.')

    getImage('https://learnworthy.net/wp-content/uploads/2019/10/Top-5-programming-languages-every-programmer-should-know-in-2019.jpg')
})

// FETCH - HTTP POST REQ METHOD
let newuser={
    user: "atilla",
    email: "atilla@intec.com",
    pwd: "123"
  }
post.addEventListener('click',(e)=>{
    fetch(APIURL,{
        method:'POST',
        body:JSON.stringify(newuser),
        headers: new Headers({
            'Content-Type':'application/json'
        })
        
    })
    .then(response=>response.json())
})

// FETCH - HTTP DELETE REQ METHOD
del.addEventListener('click',(e)=>{
    let options= {
        method:'DELETE'
    }
    fetch(currenUser,options)
    .then(response=>response.json())
    .then(result=>console.log(result))
})

// FETCH - HTTP PUT REQ METHOD
let updatedUser = {
    user: "Tim",
    email: "Tim@admin.com",
    pwd: "321123"

  }
update.addEventListener('click',(e)=>{
    fetch('http://localhost:3000/users/4',{
        method:'PUT',
        body:JSON.stringify(updatedUser),
        headers: new Headers({
            'Content-Type':'application/json; charset=utf-8'
        })
    }).then(response=>response.json()).then(result=>console.log(result))
})

// FETCH API - BLOB
let getImage= (imageFile)=>{
    fetch(imageFile)
    .then(response=>{
        console.log(response)
        return response.blob()
    })
    .then(blob=>{
        document.getElementById('imageOutput').src = URL.createObjectURL(blob)
    })
    .catch(err=>{
        console.log(err)
    })
}

