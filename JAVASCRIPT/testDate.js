
function getMyTime(){
    var date = new Date();
    setTimeout(getMyTime,300);
    console.log(date.toLocaleString())
}

getMyTime()