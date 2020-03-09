let images = [
    'https://i.imgur.com/iMbbJcF.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/',
    'https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg'
]

var i=0;
var timer=100;

// document.getElementById('slider').style.backgroundImage="url('https://i.imgur.com/iMbbJcF.jpg')"

var i = 0
// var timer = 100;
function ChangeImage() {
	var random = Math.floor(Math.random() * 3);
	document.getElementById("slider").style.backgroundImage = `url('${images[random]}')`
	
	i++;
	
    if( 1==1 ){
		setTimeout( ChangeImage, 1000 );
		
    }
}
ChangeImage();


