"use strict";
// object arrays
let goleadores = ["nico", "santi", "mati"];
let goles = [1, 2, 3];
console.log(`goleadores:${goleadores}`);
console.log(`goles:${goles}`);
//metodo alternativo 
let wheretherepenalties = [true];
console.log(`where there penalties:${wheretherepenalties}`);
//pasar elementos a string
console.log(goles.map(ele => ele.toString()));
//objects
let goleadoresID = [10, 9, 7];
goleadoresID.push(8);
console.log(goleadoresID);
goleadoresID.push(+"2");
console.log(goleadoresID);
console.log(typeof goleadoresID);
const obj = {
    name: 'John',
    age: 30
};
console.log(obj);
