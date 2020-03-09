// myFigure (player)
var player = document.getElementById('player');
var i = 0;
var times=0;
function MoveForward(times){
    i+=5;
    
    if(i<500){
       // i>5>10>15>20 >>>>>> 500
        player.style.left=i+'px'
    }else{
        i=0;
        i+=5;
        player.style.left=i+'px'
    }
    setTimeout(MoveForward,200);
}