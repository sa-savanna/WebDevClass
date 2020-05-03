const users = [
    {
        id:2,
        name:'root2',
        pwd:'12311ss'
    },
    {
        id:1,
        name:'root1',
        pwd:'123xx'
    },
    {
        id:3,
        name:'root3',
        pwd:'123dd'
    }
]

const getUsers = (arr)=>{
    return new Promise((resolve,reject)=>{
        let allUsers = arr.map(user=>{
            if(typeof user === 'object'){
               // console.log(user)
                return user
            }else{
                reject('error!')
            }
        })
        resolve(allUsers)
    })
}


getUsers(users)
.then(result=>result.sort((a,b)=>{
    return a.id - b.id;
}))
.then(newResult=>console.log(newResult))
.catch(error=>console.log(error))