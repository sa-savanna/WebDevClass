var myTime = document.getElementById("time");
var myBtn = document.getElementById("myBtn");

myBtn.addEventListener('click',getMyTime);

function getMyTime(){
    var date = new Date();
    setTimeout(getMyTime,300);
    myTime.innerHTML=date.toLocaleString();
    // console.log(date.toLocaleString())
}

// getMyTime()