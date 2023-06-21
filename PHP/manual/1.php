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
/* y esto se pueden anidar sucesivamente para hacer varios condicionales */
if (0==0) {
    # code...
}elseif (0==0) {
    # code...
}elseif (0==0) {
    # code...
}
/* esto danddnos bastantes condicionales para poder trabajar */

/* switch */
/* una  condicion especifica para todo mas que todo usado para opciones especificas */
$val = 1;
switch ($val) {
    case 1:
    // bloque de código si la expresión es igual a 1
    break;
    case 2:
    // bloque de código si la expresión es igual a 2
    break;
    default:
    // bloque de código si la expresión no coincide con ninguno de los valores anteriores
    break;
   }

/* bucles o ciclos */
/* while */
/* funciona para ejecutar un bloque de código mientras se cumpla una determinada condición */
while ($a <= 10) {
    /* haga esto  */
}

/*do While */
/* es tecnicamente lo mismo que while pero en esta caso funciona como"primero lo hace y luego pregunta si sigue" */
do {
    /* haga esto */
} while ($a <= 10);

/* for  */
/* este mas que todo es un iterador funcional para recorrer un array o un objetos */
for ($i=0; $i <0 ; $i++) { 
    /* haga esto */
}

/*  for each*/
/* mismo que for solo que mas dirigido a valores con claves arrays literales etc */
foreach ($variable as $key => $value) {
    /* haga esto con $value */
    /* haga esto con key */
}

/* funciones (definidas por el usuario) */
function calculate($a, $b, $operator) {
    switch ($operator) {
        case '+':
            return $a + $b;
        case '-':
            return $a - $b;
        case '*':
            return $a * $b;
        case '/':
            return $a / $b;
        default:
            return "Invalid operator";
    }
}

// ejemplos de uso
echo calculate(4, 2, '+'); // Output: 6
echo calculate(4, 2, '-'); // Output: 2
echo calculate(4, 2, '*'); // Output: 8
echo calculate(4, 2, '/'); // Output: 2
echo calculate(4, 2, '%'); // Output: invalido
/*  esta funcion calcula el resultado de una operacion entre dos numeros con el uso de un switch y se le da los parametros de entrada cuando se invoca*/

/* uso de void */
function logMessage(string $message) : void {
    // Haz algo con el mensaje, como escribirlo en un archivo de registro
    // ...
    // Como la función no devuelve nada, especificamos void como el tipo de retorno
}
/* void es un tipo de dato que no tiene nada que devolver a la funcion y por ello es bueno especificar */

/* include y require */
/* include y require hacen lo mismo pero de manera distinta ambos llaman a un archivo pero si este no responde tienen diferente comportamiento*/
include "ARCHIVO.php";
include_once("ARCHIVO.php");
/* si include no responde el codigo seguira ejecutando pero con un warning */
require "ARCHIVO.php";
require_once("ARCHIVO.php");
/* si require no responde el parara inmediatamente el codigo */

/* json encode y decode  */

/* encode */
/* json_encode() en PHP se utiliza para convertir una estructura de datos enPHP en una cadena JSON */

/* decode */
/*  json_decode() en PHP se utiliza para convertir una cadena JSON en una estructura de datos de PHP */

/* ejemplo */
// Creamos un array con algunos datos
$data = array(
    'name' => 'John Doe',
    'age' => 30,
    'email' => 'john.doe@example.com'
);

// Convertimos el array en una cadena JSON
$json = json_encode($data);

// Mostramos la cadena JSON resultante
echo $json;
// Resultado: {"name":"John Doe","age":30,"email":"john.doe@example.com"}

// Convertimos la cadena JSON de vuelta a un array asociativo
$decodedData = json_decode($json, true);

// Mostramos el array resultante
print_r($decodedData);
// Resultado: Array ( [name] => John Doe [age] => 30 [email] => john.doe@example.com )

/* 
metodos de array(otra vez)
*/
// Ejemplo de array_flip(): intercambia todas las claves con sus valores correspondientes en un array
$fruits = array('apple' => 'red', 'banana' => 'yellow', 'orange' => 'orange');
$flipped = array_flip($fruits);
print_r($flipped);
// Resultado: Array ( [red] => apple [yellow] => banana [orange] => orange )

// Ejemplo de array_fill(): llena un array con un valor repetido un número determinado de veces
$filled = array_fill(0, 5, 'hello');
print_r($filled);
// Resultado: Array ( [0] => hello [1] => hello [2] => hello [3] => hello [4] => hello )

// Ejemplo de array_filter(): filtra los elementos de un array utilizando una función de devolución de llamada
$numbers = array(1, 2, 3, 4, 5, 6);
$filtered = array_filter($numbers, function($num) {
    return $num % 2 == 0;
});
print_r($filtered);
// Resultado: Array ( [1] => 2 [3] => 4 [5] => 6 )

// Ejemplo de array_map(): aplica una función a cada elemento de un array y devuelve un nuevo array con los resultados
$numbers = array(1, 2, 3, 4, 5);
$squared = array_map(function($num) {
    return $num * $num;
}, $numbers);
print_r($squared);
// Resultado: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )

// Ejemplo de array_reduce(): reduce un array a un solo valor utilizando una función de devolución de llamada
$numbers = array(1, 2, 3, 4, 5);
$sum = array_reduce($numbers, function($carry, $num) {
    return $carry + $num;
}, 0);
echo $sum;
// Resultado: 15

// Ejemplo de array_key_exists(): comprueba si una clave existe en un array
$fruits = array('apple' => 'red', 'banana' => 'yellow', 'orange' => 'orange');
$exists = array_key_exists('apple', $fruits);
echo $exists;
// Resultado: 1

// Ejemplo de in_array(): comprueba si un valor existe en un array
$numbers = array(1, 2, 3, 4, 5);
$exists = in_array(3, $numbers);
echo $exists;
// Resultado: 1

// Ejemplo de array_rand(): devuelve una o varias claves aleatorias de un array
$fruits = array('apple', 'banana', 'orange', 'pear');
$randomKeys = array_rand($fruits, 2);
print_r($randomKeys);
// Resultado: Array ( [0] => 2 [1] => 1 )

// Ejemplo de array_unique(): elimina los valores duplicados de un array
$numbers = array(1, 2, 3, 2, 4, 3, 5);
$unique = array_unique($numbers);
print_r($unique);
// Resultado: Array ( [0] => 1 [1] => 2 [2] => 3 [4] => 4 [6] => 5 )

// Ejemplo de array_intersect(): devuelve los elementos comunes a dos

?>
