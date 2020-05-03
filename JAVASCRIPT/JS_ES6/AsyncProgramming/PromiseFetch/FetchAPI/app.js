const API_URL = "https://jsonplaceholder.typicode.com/posts"
const output = document.querySelector('#output')
const button = document.querySelector('input')
console.log(button)
button.addEventListener('click', function (e) {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            output.innerHTML = JSON.stringify(data)
        })

    e.preventDefault()
})
