var i=0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandom10(min, max) {
  return getRandomInt(min / 10, max / 10) * 10;
}



for(i;i<5;i++){
	//console.log(i)
	console.log(getRandom10(110,170))
	var animation = `transform:rotate(${getRandom10(110,170)})`;
	console.log(animation);
	/*if(i === 180){
		break;
	}*/
}