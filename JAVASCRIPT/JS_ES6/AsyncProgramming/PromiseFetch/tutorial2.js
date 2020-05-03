// Promise examples

const McDonalds_BurgerMenu = (mainfood,drink,fries)=>{
    return new Promise((resolve,reject)=>{
        if(typeof mainfood !='string'){
            reject('String Only!')
        }else{
            if(drink!=undefined && fries !=undefined){
                resolve(`Order:\n${mainfood}\n${drink}\n${fries}\nTicket Number:${Math.floor((Math.random()*100)+1)}`)
            }
        }
    })
}

McDonalds_BurgerMenu('BickyBurger','Coca Cola','Frietje')
.then(result=>{
    console.log(result)
})

McDonalds_BurgerMenu('BeefBurger','Fanta','ChickenWing')
.then(result=>{
    console.log(result)
})

McDonalds_BurgerMenu('Vegeterian Burger',"Cola","Spring Rolls")
.then(givemeFood=>{
    console.log(givemeFood)
})