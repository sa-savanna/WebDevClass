let users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca"
    }

]

let getUsers = ()=>{
    setTimeout(()=>{
        users.forEach((n)=>{
            console.log(n.name)
        })
    },2000)
}

let createUser = (newUser)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            users.push(newUser)
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('something went wrong here!')
            }
        },2000)
    })
}

let temp = {
    "id": 40,
    "name": "Jack Sparrow",
    "username": "root",
    "email": "root@intec"
}

createUser(temp)
.then(getUsers);