// html elements
var placeholder1 = document.getElementById('placeholder1');
var placeholder2 = document.getElementById('placeholder2');
var diceRollButton = document.getElementById('diceRollerbutton');

// EventListener
diceRollButton.addEventListener('click', diceRollerFunction);

// function
function diceRollerFunction() {
    var diceRollSides = 6;
    let diceRollMatchs = []
    var randomNumber1 = Math.floor(Math.random() * diceRollSides) + 1;
    var randomNumber2 = Math.floor(Math.random() * diceRollSides) + 1;
    if (randomNumber1 == randomNumber2) {
        // console.log("number of match",randomNumber1," ",randomNumber2)
        diceRollMatchs.push(randomNumber1)
        diceRollMatchs.push(randomNumber2)
    }
    placeholder1.innerText=randomNumber1;
    placeholder2.innerText=randomNumber2;
    console.log(randomNumber1, " ", randomNumber2);
    console.log(diceRollMatchs);
    console.log('testing')
}