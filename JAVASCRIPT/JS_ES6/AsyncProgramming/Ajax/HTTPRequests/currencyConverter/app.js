const [amount, from, to, convertbtn] = document.forms[0];
const _result = document.querySelector('#result');
const _symbol = document.querySelector('#symbol');
const jumbo = document.querySelector('.jumbotron');

const e = (t) =>{
    return document.createElement(t)
}

const MsgGenerator = (type,msg)=>{
    /*

    <div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>

*/

const divAlert = e('div')
divAlert.className=`alert alert-${type}`;
divAlert.role=`alert`
divAlert.innerHTML=msg

return divAlert

}

document.body.onload = () => {
    let xml = new XMLHttpRequest();
    var url = "https://api.exchangeratesapi.io/latest";
    xml.open('GET', url)
    xml.onload = () => {
        if (xml.status === 200) {
            let currencies = JSON.parse(xml.responseText).rates

            for (currency in currencies) {
           //     console.log(currency)
                from.innerHTML += `<option>${currency}</option>`
                to.innerHTML += `<option>${currency}</option>`
            }
        } else {
            console.log('fail')
        }
    }

    xml.send()
}

const EventHandler = (e)=>{
    
    if(amount.value === "" || from.value === to.value){
        console.log('you can not leave amount empty')
        let msgGen = MsgGenerator('danger','Something Went Wrong!')
        jumbo.append(msgGen)
        setTimeout(()=>{
            msgGen.remove();
        },2000)
    }else{
        getApiData(`https://api.exchangeratesapi.io/latest?base=${from.value}&symbol=${to.value}`,(res)=>{
            const dataShow = res.rates[to.value] * Number(amount.value);
            _result.innerHTML= dataShow.toFixed(3);
            _symbol.value = to.value;
        }) // EUR
    }



    

    console.log('hello')

    e.preventDefault();
}


convertbtn.addEventListener('click',EventHandler)

function getApiData(API,callback){
    const xhr = new XMLHttpRequest();
    xhr.onload=(res)=>{
        if(xhr.status === 200){
            return callback(JSON.parse(res.target.responseText))

        }else{
            console.log('GET Request failed')
        }
    }
    xhr.open('GET',API);
    xhr.send();
}