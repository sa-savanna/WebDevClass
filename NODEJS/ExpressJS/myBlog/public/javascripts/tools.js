
console.log('hello tools')

const plainText = document.querySelector('#plainText')
const decode = document.getElementById('decode')
const encode = document.getElementById('encode')
const secretKey = document.getElementById('secretKey');

encode.addEventListener('click', function (e) {
    console.log('hello')
    fetch('http://localhost:5006/tools/encode', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secretkey: secretKey.value,
            message: plainText.value
        })
    }).then(response => {
        return response.text()
    }).then(encodedString => {
        plainText.value = encodedString
    })

    e.preventDefault()
})

decode.addEventListener('click', function (e) {
    console.log('hello')
    fetch('http://localhost:5006/tools/decode', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            secretkey: secretKey.value,
            message: plainText.value
        })
    }).then(response => {
        return response.text()
    }).then(decodedString => {
        plainText.value = decodedString
    })
    e.preventDefault()
})