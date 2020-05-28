var aes256 = require('aes256');
// var md5 = require('md5')
// secret token
var key = 'intec-123';

// user password
var userPassword = "ThisIsMySecretPassword123"
 
var encrypted = aes256.encrypt(key, userPassword);
var decrypted = aes256.decrypt(key, 'bbJ3iS2U33DzOfEYcdUwnD6bQo+SAqNsrw==');

//console.log(encrypted)

console.log(decrypted)
