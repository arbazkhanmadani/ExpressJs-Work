var url = require('url');


var adr = `http://localhost:8080/default.htm?year=2017&month=february&d=${new Date()}`;
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'


console.log(q.auth)
console.log(q.hash)
console.log(q.hostname)
console.log(q.href)
console.log(q.pathname)
console.log(q.protocol)
console.log(q.search)
console.log(q.slashes)

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
console.log(qdata.year);
console.log(qdata.d);