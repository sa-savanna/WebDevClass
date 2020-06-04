// const yargs = require('yargs');
const whois = require('whois');


const options = yargs
.usage('Usage: --domain <paul.com>')
.option('domain',{alias: 'domain',describe:'whoisDomain', type:'string', demandOption:true})
.argv;

// console.log(options.domain) // result: domain.com

whois.lookup(process.argv[2], function(err, data) {
    console.log(data) // whois result
})