<?php

$contrasena = "password123";

$hash = password_hash($contrasena, PASSWORD_DEFAULT);
echo $hash;


//VERIFICA LA CONTRASEÑA
$ingreso = "password123";
if(password_verify($ingreso, $hash)){
    echo "<br>";
    echo "<br>";
    echo "CONTRASEÑA CORRECTA";
}else{
    echo "CONTRASEÑA INCORRECTA";
}



?>