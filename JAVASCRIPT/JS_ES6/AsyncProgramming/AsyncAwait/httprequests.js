class HTTPRequests {


    async get(url) {
        const response = await fetch(url) // Response object
        console.log(response.status)
        console.log(response.url)
        console.log(response.type)
        const data = await response.json() // JSON object
        return data;
    }

    async post(url, data) {
        /*
        
        fetch(API_URL,{
            method:'post',
            headers:{
        
            }
        })
        
        */

       
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })

        const responseData = await response.json()
        return responseData


    }

    delete(url) {

    }


}

let app = new HTTPRequests();

// get request
app.get('https://jsonplaceholder.typicode.com/users')
    .then(users => console.log(users))


// post request
    let newData = {
        id: 100,
        name: "Jack",
        email: "jack@jack.com"
    }
app.post('https://jsonplaceholder.typicode.com/users/',newData)
.then(res=>console.log(res))

