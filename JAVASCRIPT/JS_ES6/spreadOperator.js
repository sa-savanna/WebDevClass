// spread Operator examples

// ex1
const obj1 = {
    name: 'Ecce Homo',
    author: 'Friedrich Nietzsche'
}
const obj2 = {
    rate: 10
}
const combined = {
    ...obj1,
    ...obj2,
    stock: 10
}
console.log(combined)
/*
result
{ name: 'Ecce Homo',
  author: 'Friedrich Nietzsche',
  rate: 10,
  stock: 10 }
*/

// ex2

const sum = (a, b) => {
    return a + b;
}

const args = [7, 8];
const _output = sum(...args);
console.log(_output);

// ex3

let obj3 = {
    a: 1, b: 2, x: 3, y: 4,abs:10,name:'sasaas'
};

const {a,b,...z} = obj3
console.log(a)
console.log(b)
console.log(z)

const arr = [7,7,44,55,66,66,4,4,3,2,1,1];
const arr_filtered = [...new Set(arr)];
console.log(arr_filtered);

// ex4

// ESv5
var company_name = 'intecbrussel';
var splitted = company_name.split('');
console.log('es5 ',splitted);

// ESv6
splitted = [...company_name];
console.log('es6 ', splitted);

let scores = [55,66,77,44,99];
var result = Math.max(scores);
console.log(result) // NaN
result = Math.max(...scores);
console.log(result)