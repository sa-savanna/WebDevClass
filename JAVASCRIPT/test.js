var myarr=['a','b','c']
const check = myarr.reduce((accumulator, item)=>{
	accumulator += item,0;
})

console.log(check)