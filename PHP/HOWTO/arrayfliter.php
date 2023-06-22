<?php

$estudiantes = array(
array(
    "nombre" => "Nicolas",
    "apellido" => "Ordoñez",
    "edad" => 22
),
array(
    "nombre" => "Angela",
    "apellido" => "Gomez",
    "edad" => 21
),
array(
    "nombre" => "Ana",
    "apellido" => "Cardenas",
    "edad" => 42
),
array(
    "nombre" => "Daniela",
    "apellido" => "Cardenas",
    "edad" => 18
)
);

$estud_menores = array_filter($estudiantes, function
($estudiante){
    return $estudiante["nombre"] == "Dairon";
});

print_r($estud_menores);



?>