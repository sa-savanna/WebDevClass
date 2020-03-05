var i=0;
var sword = document.getElementById("sword");
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandom10(min, max) {
  return getRandomInt(min / 10, max / 10) * 10;
}

for(i;i<10;i++){
	console.log(getRandom10(110,170))
	var degisken = getRandom10(110,170)+"deg";
	var animation = `rotate(${getRandom10(150,280)}deg)`;
	sword.style.transform = animation;
	console.log(animation);
	
}