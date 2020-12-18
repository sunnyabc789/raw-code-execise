exports.done = false;
var b = require('./b.js');
console.log('在 a.js 之中，b.done = %j', b.done); // true
exports.done = true;
console.log('a.js 执行完毕');