// html elements
const inputKey = document.querySelector('#inputKey');
const inputValue = document.querySelector('#inputValue');
const buttonInsert = document.querySelector('#buttonInsert');
const getDataFromStorage = document.querySelector('#getDataFromStorage');
const getDataByKey = document.querySelector('#getDataByKey');
const output = document.querySelector('.output');
buttonInsert.addEventListener('click', insertSessionData);

function insertSessionData(event) {
    sessionStorage.setItem(inputKey.value, inputValue.value);
    event.preventDefault();

}

getDataFromStorage.addEventListener('click',function(event){
    var isOutputEmpty = output.innerHTML === "";
    if(isOutputEmpty){
        for(let i=0; i<sessionStorage.length; i++){
            var key = sessionStorage.key(i);
            var value = sessionStorage.getItem(key)
            output.innerHTML +=`Key: ${key} Value: ${value}<br>`
        }
    }else{
        output.innerHTML= "";
    }
    
})