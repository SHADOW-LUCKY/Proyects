<?php
/* variables en php */
/* boolean */
$esVerdad= true;
/* int */
$int=1;
/* float */
$float=14.2;
/* strings */
$str="alo?";
/* arrays */
$arr=[];
/* constantes */
define('PI', 3.14);
/* operadores en php */
/* aritmeticos */    
$sum = 4+3;/* Adición */
$rest =4-3;/* Substracción */
$div= 0/0;/* División */
$mult=5*5;/* Multiplicación */
$poten=5**5;/* Exponentes */
$modul=5%5; /* modulos */
/* comparativos */
/* son operadores que comparan ciertos valores con una cierta condicion si es mayor ,menor ,igual, si esta, si no esta, si no era igual etc.  */
/* ejemplo */
if($mult > $poten){
    return true;
}
/* en la mayoria de casos se usan en condicionales para retornar ciertas cosa en caso de que sea verdad*/
/* 
otros comparativos
$a == $b	Igual
$a === $b	Idéntico
$a != $b	Diferente
$a <> $b	Diferente
$a !== $b	No idéntico
$a < $b	    Menor que
$a > $b	    Mayor que
$a <= $b Menor o igual que
$a >= $b Mayor o igual que
*/

/* metodos de string(funciones para modificar un string)*/
$string="Nicolas LUCKY";
echo strlen($string);
/* strlen sacar cuantas letras tiene el array */
echo strtoupper($string);
/* pasa todo el string a mayusculas */
echo strtolower($string);
/* pasa todo el string a minusculas */
echo str_replace('LUCKY', 'NOT LUCKY', $string);
/* remplaza lo que le demos en ciertas variable o lugares */
echo strpos($string,'las');
/* busca en donde esta la peticion que le demos */



/* metodos con array */
$fruits = array('Apple', 'Orange', 'Watermelon', 'Mango');

var_dump($fruits);
/* para poder ver el arrreglo */
echo $fruits[0];
/* poder ver un elemento de un arreglo(solo necesita la posicion) */
$fruits[4]='cacao';
/* puedes acceder a una posicion y poner le unn valor en esfpecifico */
array_pop($fruits);
/* quita en ultimo valor de un array */
array_push($fruits,'locked');
/* añade un valor que tu quieras en la ultima posicion*/
array_shift($fruits);
array_unshift($fruits,'alo?');
/* lo mismo solo que afecta en la primera posicion */


/* arrays asociativos */
$animales = [
    "Muffinhead" => 14,
    "Peter" => 4,
    "Monnie" => 7,
    "Banh" => 10
];
var_dump($animales);
/* los metodos de array tambien pueden ser usados aqui pero tambien hay otro */
asort($animales);/* de A a Z */
arsort($animales);/* de Z a A*/
/* organizar los valores por orden alfabetico(no funcionara aqui usa mejor sort y rsort)*/
ksort($animales);/* de A a Z */
krsort($animales);/* de Z a A*/
/* lo mismo pero con las llaves de los valores */

/* isset o empty */
/* isset */
/* define si hay una variable y si tiene un valor */
$var = '';
if (isset($var)) {
    echo "Esta variable está definida, así que se imprimirá";
}
/* se recomienda su uso en condicionales para ver variable y proceder (si esta se ejecuta la condicion)*/
/* empty */
/* si lo encuentra vera si esta vacio o no esta definido */
if (empty($var)) {
    echo '$var es o bien 0, vacía, o no se encuentra definida en absoluto';
}
/* para prevenir operar con algo nulo */


/* estructuras de control y condicionales */
/* if (el clasico) */
/* es un condicional de si o no con valores agregados y que actua si es verdadderad */
if(1>2){
    /* HAGA ESTO */
}
/*tambien hay opcion por si nos se cumple */
else{
    /* haga esto */
}
?>