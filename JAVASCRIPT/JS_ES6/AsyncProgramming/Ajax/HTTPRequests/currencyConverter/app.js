let xml = new XMLHttpRequest();
var url = "https://api.exchangeratesapi.io/latest";
xml.open('GET',url)
xml.onload=()=>{
    if(xml.status === 200){
        console.log(xml.responseText)
        let currencies = JSON.parse(xml.responseText).rates
        console.log(currencies)
        //currencies.forEach()
        for(currency in currencies){
            console.log(currency)
        }
    }else{
        console.log('fail')
    }
}

xml.send()


