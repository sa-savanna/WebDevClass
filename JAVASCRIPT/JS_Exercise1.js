// html elements
var increment = document.getElementById('increment'); // Increment Button
var decrement = document.getElementById('decrement'); // Decrement Button
var MyResult = document.getElementById('result'); // Update Badge
var count = 0; // ++

increment.addEventListener('click', Increment); // Event Listener for Increment button
decrement.addEventListener('click', Decrement); // Event Listener for Decrement button

function Increment() {
    count++; // 1 > 2 > 3
    console.log(count)
    MyResult.innerText = count; // Badge html element updating here...
    console.log('this is Increment');
}

function Decrement() {

    if (count <= 0) {
        MyResult.innerText = "0";
    } else {
        count--;
        MyResult.innerText = count;
    }


}