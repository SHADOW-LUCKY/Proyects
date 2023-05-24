'use strict';
/*//constructores
const Person = function(birth,name) {
    this.birth = birth;
    this.name = name;
}
const person = new Person('123','nicolas');
const person2 = new Person('1980','andrea')
const person3 = new Person('1097','jairo')
console.log(person);
console.log(person2);
console.log(person3);
const jay = 'lol'
console.log(jay instanceof Person);
console.log(person instanceof Person);
//prototypes
Person.prototype.calcAge = function (){
    console.log(2037-this.birth);
}
console.log(Person.prototype);

person.calcAge()
person2.calcAge()
person3.calcAge()
console.log(person.__proto__);
console.log(person.__proto__===Person.prototype);
console.log(Person.prototype.isPrototypeOf(person));
console.log(Person.prototype.isPrototypeOf(person2));
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype);
//el prototipo funciona asi 
//persona tiene un constructor pero cuando hacemos prototype se refiere al constructor de persona osea Person.prototype no es el prototype de persona si no lo que lo construye
Person.prototype.species = 'humano'*/
/* prueba coding challenge */
/* const Car = function(make,speed){
    this.make= make
    this.speed= speed
}
Car.prototype.heyList=function(){
    console.log(`the ${this.make} is going at ${this.speed}`)
}
Car.prototype.accer=function(){
    this.speed +=10
}
Car.prototype.brake=function(){
    this.speed -=5
} 
let num1 = new Car('BMW',110)
let num2 = new Car('mercedes',85)
num1.accer()
num1.brake()
num1.heyList()
 */

/* ES6 classes */
/* expresion de clase */
/* const PersonCl = class{} */
/* clase declarada*/
class PersonCl{
    constructor(name,year){
        this.name=name
        this.year=year
    }
    calcAge(){
       console.log(2037-this.year);
    }
}
const nico = new PersonCl('nicolas','2005') 
console.log(nico);
nico.calcAge()