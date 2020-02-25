// String methods

var message = "Neque porro porro porro porroquisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... porro,ipsum ipsum ipsum lora lora lora";

var myConsole = message.length;
myConsole = message.indexOf('qui',10);
myConsole = message.lastIndexOf("porro");
myConsole = message.search("Neque");
console.log(myConsole);

var ShowInConsole;
ShowInConsole = message.slice(0,10); // 10
ShowInConsole = message.slice(0,-1);
ShowInConsole = message.slice(9);
ShowInConsole = message.substring(10,25);
ShowInConsole = message.substring(0,-1); // return null

ShowInConsole = message.substr(9,20); // start from index number and return 20 chars
ShowInConsole = message.replace("dolorem","FOOOO")

ShowInConsole = message.replace(/[^a-zA-Z0-9]/g,'foo');
ShowInConsole = message.replace(/ipsum/g,'01');
ShowInConsole = message.toUpperCase();
ShowInConsole = message.toLowerCase();

message= "Firstname ";
var myLastName = "     Lastname          "; 
/*
joins two or more strings
*/
ShowInConsole = message.concat (myLastName.trim()/* removing spacing */);

/*
https://regexr.com/
*/
message = "lorem ipsum";
ShowInConsole = message.charAt(1);
ShowInConsole = message.charCodeAt(1); // UTF-16
// http://www.fileformat.info/info/charset/UTF-16/list.htm
ShowInConsole = message[0]; // index number start from 0

// message = "a,b,c,d,e,f,g,h";
console.log(typeof(message))
ShowInConsole = message.split(",")
message = "Neque porro porro porro porroquisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... porro,ipsum ipsum ipsum lora lora lora"
ShowInConsole = message.split("");
console.log(ShowInConsole);


let arr = []

fetch('data.csv').then(res=>res.text()).then(data=>{
	result = [];
	data = data.split("\n");
	keys = data[0].split(",");
	values = data.slice(1,-1);
	values.map(value=>{
		value = value.split(",");
        ress = {};
		keys.map((key, k)=>{
			ress[key] = value[k];
		})
		result.push(ress);
		
	})
	console.log({result})
})