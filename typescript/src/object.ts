// object arrays

let goleadores:string[] = ["nico","santi","mati"]

let goles:number[] = [1,2,3]

console.log(`goleadores:${goleadores}`)
console.log(`goles:${goles}`);

//metodo alternativo 

let wheretherepenalties:Array<boolean> = [true]
console.log(`where there penalties:${wheretherepenalties}`);

//pasar elementos a string

console.log(goles.map(ele=>ele.toString()));


//objects

let goleadoresID = [10,9,7]
goleadoresID.push(8)
console.log(goleadoresID);
goleadoresID.push(+"2")
console.log(goleadoresID);
console.log(typeof goleadoresID);


const obj = {
    name: 'John',
    age: 30
}

console.log(obj);


type Album = {
    id :number,
    nombre :string,
    singer :string
} 

const pista1:Album = {
    id : 0,
    nombre : "our god",
    singer : "diego"
}

const pista2:Album = {
    id : 1,
    nombre : "hosanna",
    singer : "ronaldinho"
}



