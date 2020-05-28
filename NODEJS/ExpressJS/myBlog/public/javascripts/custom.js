console.log('hello')

// html elements

const plainText = document.getElementById('plainText');
const decode = document.getElementById('decode')
const encode = document.getElementById('encode');
const secretKey = document.getElementById('secretKey');

// ENCODE A STRING
encode.addEventListener('click',(e)=>{
    console.log('encode button');
    let getObj = {
        secretkey: secretKey.value,
        message: plainText.value
    }
    fetch('http://localhost:5000/tools/encode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(getObj)
    }).then(res=>res.text())
    .then(encrypted =>{
        console.log(encrypted)
        plainText.value=encrypted
    })

    e.preventDefault();
})

// DECODE A CRYPTED STRING

decode.addEventListener('click',(e)=>{
    let getObj = {
        secretkey: secretKey.value,
        message: plainText.value
    }
    console.log('decode button')
    fetch('http://localhost:5000/tools/decode', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(getObj)
    })
    .then(res=>res.text())
    .then(decrypted=>{
        plainText.value = decrypted
    })
    e.preventDefault();
})