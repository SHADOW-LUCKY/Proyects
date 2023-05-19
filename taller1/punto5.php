<?php
$num1= $_POST['num1'];
$num2= $_POST['num2'];
if($num1 > $num2){
    $suma = $num1 + $num2;
    $resta = $num1 - $num2;
    echo "la suma es $suma <br>";
    echo "la resta es $resta";
}elseif($num1 < $num2){
    $producto = $num1 * $num2;
    $division = $num1 / $num2;
    echo "el producto es $producto <br>";
    echo "el dividido es $division";
}else{
    echo "los numeros son iguales";
}
?>
