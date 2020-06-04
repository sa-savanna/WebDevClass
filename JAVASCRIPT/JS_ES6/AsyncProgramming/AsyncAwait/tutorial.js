// // Simple Promise chain syntax
// function printer(string) {
//     return new Promise((resolve, reject) => {

//         resolve(string)

//     })
// }

// let example = printer('intecbrussel')

// example.then(result => console.log(result));


// // Async Function
// async function printer1(string) {
//     try {
//         console.log(string)
//     } catch (error) {
//         throw 'this is an error'
//     }

// }

// let example1 = printer1('intecbrussel');
// console.log(example1) // async function
// console.log(example) // promise es6
// example1.then(res => console.log(res))




// // example2

// const getUser = (user) => {
//     let result = Promise.resolve(user);
//     return result;
// }

// const getUsers = () => {
//     let x;
//     return getUser('Root')
//         .then(firstUser => {
//             x = firstUser
//             return getUser('Admin')
//         })
//         .then(secondUser => {
//             x = [x, secondUser]
//             console.log(x);
//         })
//         .catch(err => console.log(err))
// }

// getUsers()

// // example2 - with await

// const example2 = async () => {
//     // console.log('hello')
//     try {
//         //  throw 'Something went wrong!'
//         let firstUser = await getUser('Anna');
//         let secondUser = await getUser('Paul');
//         let result = await Promise.all([firstUser, secondUser])
//         let result1 = await [firstUser, secondUser];
//         console.log(result1)
//         console.log(result)

//     } catch (error) {
//         console.log(error)
//         throw 'something went wrong'
//     }
// }
// example2()

// // example3

// async function getRandom() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
//     console.log(data)
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     // .then(res=>res.json())
//     // .then(data=>{
//     //     console.log(data)
//     // })

// }

// getRandom()



// function promiseMe(data) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(data)
//         }, 1)
//     })
// }

// promiseMe('This is promise').then(res => {
//     console.log(res)
// })

// async function myAsyncFunction() {
//     let promiseMe = Promise.resolve(5);
//     let result = await promiseMe; // Syntax error
//     console.log(result)
// }

// // example4

// async function testFunc(data) {
//     let promiseMe = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data)
//             } else {
//                 reject(new Error('Please enter string data!'))
//             }
//         }, 5000)
//     })
//     const response = await promiseMe
//     return response
// }

// // error
// testFunc(5).then(data => console.log(data)).catch(err => console.log(err))

// // string
// testFunc("This is string data").then(data => console.log(data)).catch(err => console.log(err))

// // async/await promise-based function

// /*

// 1 - getData from API
//     * function middle
// 2 - printing

// undefined

// await 




// */

// async function getCurrency(url) {
//     const response = await fetch(url)
//     const data = await response.json();
//     console.log(data)
// }

// getCurrency('https://api.exchangeratesapi.io/latest')
// .then(res=>res).catch(err=>console.log(err))

// let data = [
//     {
//         id:1,
//         name:'Paul'
//     },
//     {
//         id:2,
//         name:'Anna'
//     },
//     {
//         id:3,
//         name:'Stien'
//     },
//     {
//         id:4,
//         name:'Merlin'
//     }
// ]

// async function getUsersx(obj){
//     return await obj.forEach((user)=>{
//         console.log(user)
//     })
// }
// getUsersx(data).then(res=>res)

// // post

// let posts = []

// async function postUser(post){
//     let newPost = await post;
//     posts.push(newPost);
//     return posts;
// }



// postUser({
//     id:5,
//     name:'Tim'
// }).then(res=>console.log(res)).catch(err=>console.log(err))



async function getRandomx1(){
    let response= await fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then(value=>console.log(value.message))
    }

function getRandomx(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then(value=>console.log(value.message))
    }

getRandomx()


