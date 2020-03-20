const filter = document.querySelector('#filter');
console.log(filter);
// Input Events

let data;


// Usage of DOMContentLoaded event type
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('Page fully Loaded...');
    // alert('Page Loaded!');
    data = [1, 2, 3, 4, 5, 6];
});

// Focus event
filter.addEventListener('focus', function (event) {
    console.log(event.type);
    filter.style.backgroundColor = "yellow"; // input field background changed
});


// Blur Event
filter.addEventListener('blur', function (event) {
    console.log('Blur event', event.type);
    filter.style.backgroundColor = "black";
    filter.style.color = "white";
});

// Copy Event
filter.addEventListener('copy',function(event){
    console.log(event.type);
    console.log('copied');
});

// Cut Event
filter.addEventListener('cut',function(event){
    console.log('cut event');
});

// Select Event
filter.addEventListener('select',function(event){
    console.log("select event");
});


// Paste Event