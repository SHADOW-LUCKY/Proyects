<?php

$datos = '[
    {
        "nombre" : "Nicolas",
        "apellido" :"Ordoñez",
        "edad" : 22
    },
    {
        "nombre" : "Angela",
        "apellido" :"Carvajal",
        "edad" : 20
    }
]';

echo "<br>";
echo "<br>";
var_dump($datos);


echo "<br>";
echo "<br>";

$datosnew = json_decode($datos, true);
var_dump($datosnew);

echo "<br>";
echo "<br>";

foreach ($datosnew[0] as $key => $value) {
    echo $value;
    echo "<br>";
}




?>