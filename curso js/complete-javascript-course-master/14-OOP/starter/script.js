'use strict';
//constructores
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
Person.prototype.species = 'humano'