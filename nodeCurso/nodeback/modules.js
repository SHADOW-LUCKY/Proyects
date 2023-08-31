/* console.log(require('module').wrapper); */
//module exports
const C = require('./modexp.js');

const calc = new C()

console.log(calc.add(1, 2));
console.log(calc.subtract(3, 4));

//exports 
//const C2 = require('./exports.js')

const  {add, subtract} = require('./exports.js')

console.log(add(1, 2));
console.log(subtract(3, 4));

//caching function

require('./cache.js')()
require('./cache.js')()
require('./cache.js')()