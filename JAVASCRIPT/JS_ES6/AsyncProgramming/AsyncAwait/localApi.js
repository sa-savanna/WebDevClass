// Original API
const fetch = require('node-fetch')
/*
 
from original - http://localhost:3000/posts
to cloneAPI - http://localhost:5005/clone


*/
fetch('http://localhost:3000/posts')
.then(response=>response.json())
.then(jsonObj=>{
  //  console.log(jsonObj)
    jsonObj.forEach((current)=>{
        console.log(typeof current)
        // cloning data here
        fetch('http://localhost:5005/clone',{
            method:'POST',
            body:JSON.stringify(current),
            headers: {
                'Content-Type': 'application/json'
             
              } 
        }).then(result=>result.json()).catch(error=>error)
        // cloning data end
        // postObj('http://localhost:3000/posts',current);
    })
})


