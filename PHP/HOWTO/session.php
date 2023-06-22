<?php

session_start();

$_SESSION['usuario'] = "Nicolas";
$_SESSION['password'] = "Ordoñez123";

echo "el usuario es: ". $_SESSION['usuario'];
echo "<br>";
echo "la contraseña es: ". $_SESSION['password'];
echo "<br>";

?>