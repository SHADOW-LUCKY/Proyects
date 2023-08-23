/* import {apikey as a} from './util.js' */
//import * as util from './util.js'
//console.log(util.apikey);

/* const userMessage = 'hello world'

console.log(userMessage);
console.log(userMessage);

if(10 === 5){
    console.log(userMessage);
}else{
    console.log('error');
} */
/* 
function greet(user ,msg) {
console.log(user);
console.log(msg) 
return user +" "+msg
}

console.log(greet('nico','alo?'))
 */

/* export default (user ,msg) =>{
    return user +" "+msg
} */

/* const user = {
    name:'max',
    age: 30,
    greet: function(){
        console.log('hello');
        console.log(this.name);
    }
}
console.log(user.name);
user.greet(); 

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('hello');
        console.log(this.name);
    }
}

const manuel = new User('manuel',40);
console.log(manuel);
manuel.greet(); */


//arrays

/* const hobbies = ['coding','eating','sleeping'];
console.log(hobbies[0]);

hobbies.push('playing');
console.log(hobbies);

const lastitem = hobbies.findIndex((item)=>{
    return item === 'playing';
})

console.log(lastitem);

let newhobbies = hobbies.map((item)=>{ return {name:item}});

console.log(newhobbies);
 */

/* const [firstname , lastname] = ['nico','max'];
console.log(firstname);
console.log(lastname);






const array = [1,2,3,4,5];
const arrayex = ['one','two','three','four','five'];

const mergearr = [...array,...arrayex];
console.log(mergearr);

let car = {
    color: 'white',
    price: 30000
}

const fabric = {
    make: 'audi',
    model: 'a4',
    year: 2020
    ...car
}
console.log(fabric);

 */

/* const password = prompt('Enter your password');

if (password.length >= 8){
    console.log('ok');
}else{
    console.log('error');
}

if (password === '12345678'){
    console.log('ok');
}else if(password === 'secret'){
    console.log('ok');
}else{
    console.log('error');
}

const arrayex = ['one','two','three','four','five'];
for (let i = 0; i < arrayex.length; i++){
    console.log(arrayex[i]);
}
 */
/* 
function handleTimeout() {
    console.log('timeout');
}

function handleTimeout2() {
    console.log('timeout.... again');
};

setTimeout(handleTimeout, 3000);
setTimeout(handleTimeout2, 5000);
setTimeout(()=>{console.log('timeout once again')}, 6000); */


function init() {
    function greet() {
        console.log('hello');
    }
    greet();
};
init();