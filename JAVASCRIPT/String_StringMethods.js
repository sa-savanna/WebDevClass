var Msg = "     Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
var myConsole=Msg.length;
myConsole = Msg.indexOf("est");
myConsole = Msg.lastIndexOf("qui")
myConsole = Msg.indexOf("est",20);
myConsole = Msg.search("dolorem")
console.log(myConsole)

// Extracting String Parts

var ShowInConsole;
ShowInConsole = Msg.slice(21,40);
ShowInConsole = Msg.slice(-21,-1);
ShowInConsole = Msg.slice(7);
ShowInConsole = Msg.substring(21,30); // substring() is similar to slice() but cannot accept negative indexes.
ShowInConsole = Msg.substr(21,40); // method extract a part of a string and returns the extracted parts in a new string
ShowInConsole = Msg.replace("porro","Morro");
ShowInConsole = Msg.replace(/porro/g,"Yoyo"); // To replace all matches, use a regular expression
ShowInConsole = Msg.toUpperCase(); // converted to upper
ShowInConsole = Msg.toLowerCase(); // converted to lower
ShowInConsole = Msg.concat("Foooooo"); //joins two or more strings
ShowInConsole = Msg.trim();
ShowInConsole = Msg.charAt(22); // method returns the character at a specified index (position) in a string
ShowInConsole = Msg.charCodeAt(21); // The method returns a UTF-16 code (an integer between 0 and 65535)
ShowInConsole = Msg[21] // ECMAScript 5 (2009) allows property access [ ] on strings
ShowInConsole = Msg.split(","); // Converting a String to an Array
ShowInConsole = Msg.split(""); // Converting a String to an Array
console.log(ShowInConsole);