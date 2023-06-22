<?php

$datos = array(
    'nombre' => 'Nicolas',
    'apellido' => 'Ordoñez',
    'edad' => 22
);

var_dump($datos);
echo "<br>";
echo "<br>";
$datosnew = json_encode($datos);
var_dump($datosnew);

?>