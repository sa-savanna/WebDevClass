var i = 0, howManyTimes = 100;
function f() {
    console.log(i+20)
    var a = i + 20;
    document.getElementById('progress').style.width= a + '%';
    i++;
    if( i < howManyTimes ){
        setTimeout( f, 1000 );
    }
}
f();
