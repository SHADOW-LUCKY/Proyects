<?php

$datos = array(
    'nombre' => 'Dairon',
    'apellido' => 'Shmelinguer',
    'edad' => 22
);

var_dump($datos);
echo "<br>";
echo "<br>";
$datosnew = json_encode($datos);
var_dump($datosnew);

?>