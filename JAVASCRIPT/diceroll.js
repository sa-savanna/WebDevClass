function diceRoll(){
	var sides=6;
	let diceRoll = []
	let diceRollMatchs=[]
	var randomNumber1 = Math.floor(Math.random() * sides) + 1;
	var randomNumber2 = Math.floor(Math.random() * sides) + 1;
	if(randomNumber1==randomNumber2){
		diceRollMatchs.push(randomNumber1)
		diceRollMatchs.push(randomNumber2)

	}
	diceRoll.push(randomNumber1);
	diceRoll.push(randomNumber2);
    return console.log('DiceRoll Random=>',diceRoll, '\nMatchs=>',diceRollMatchs);
}

console.log(diceRoll())