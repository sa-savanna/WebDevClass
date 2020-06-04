const url = require('url');

let result = url.parse('http://testphp.vulnweb.com/listproducts.php?cat=1',false)
// http://testphp.vulnweb.com/listproducts.php?cat=1

console.log(result.host) // printed: hostname/domainname
console.log(result.href)
console.log(result.query)
console.log(result.protocol)
