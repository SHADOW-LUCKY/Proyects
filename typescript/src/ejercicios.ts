/* let n1 = prompt("Ingresa el primer número");
let n2 = prompt("Ingresa el segundo número");
let numn1 = parseFloat(n1);
let numn2 = parseFloat(n2);
if(numn1 > numn2){
    alert("La suma de los digitos da como resultado " + (numn1 + numn2) + "\nLa resta de los digitos da como resultado " + (numn1 - numn2));
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
else if(numn1 < numn2){
    alert("El producto entre los digitos da como resultado "+ (numn1 * numn2) + "\nLa division da como resultado " + (numn1 + numn2).toFixed(3));
    setTimeout(function(){
        window.location.reload();
     }, 1000);
}
else{
    alert("Digita valores validos");
    setTimeout(function(){
        window.location.reload();
     }, 1000);
} */

// 2
/* 
let fTotal = 0;
let preTotal = parseFloat("");
do{
    let nombr = prompt("Ingresa tu nombre:");
    let nart = prompt(nombr + ", ingresa el nombre del articulo");
    let part = parseFloat(prompt("Ingresa el precio por unidad del o de los " + nart + "(s)"));
    let cart = parseFloat(prompt("Digita el numero de "+ nart + "(s) que desea llevar"));
    preTotal = parseFloat(part*cart);
    fTotal += preTotal;
    alert("El precio total a pagar por los " + cart + " " + nart + "(s)" + " llevados es de" + " COP$" + preTotal);
}while(confirm("¿Deseas añadir otro articulo?"));

alert("Tu valor total a cancelar es de COP($)" + fTotal) */