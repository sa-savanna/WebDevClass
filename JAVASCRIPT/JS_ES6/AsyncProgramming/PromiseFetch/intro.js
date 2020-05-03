// new Promise()

let printService = (string)=>{
    return new Promise((resolve,reject)=>{
        console.log(string)
        resolve()
    })
}

printService('intec')
.then(()=>{return printService('intec1')})
.then(()=>{return printService('intec2')})
.catch((err)=>{
    console.log(err)
})

let data = ['Jack','Ali','Bruce','Mike','Paul'];

let Promise1 = new Promise((resolve,reject)=>{
    if(data !=null){
        resolve(data.sort())
    }else{
        reject('Error!')
    }
})

console.log(Promise1)

let pro1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('First Promise')
    },1000)
})

let pro2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Second Promise');
    },10)
})

let pro3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Third Promise');
    },100)
})

// Promise.All

Promise.all([pro1,pro2,pro3])
.then((allValues)=>{
    console.log(allValues)
}).catch((err)=>{
    console.log(err)
})

Promise.race([pro1,pro2,pro3]).then((getVal)=>{
    console.log(getVal)
})

