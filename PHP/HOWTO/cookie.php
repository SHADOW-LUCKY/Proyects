<?php

setcookie("EjemploCookie1", "Hola mundo");
setcookie("EjemploCookie2", "PHP ES MUY BUENO..", time() + 3600);
setcookie("EjemploCookie3", "Cookie con fecha", strtotime('2023-12-31 23:59:59'));

/* ---------------------------------------------- */

echo "MI primera cookie es: ". $_COOKIE["EjemploCookie1"];
echo "<br>";
echo "MI segunda cookie es: ". $_COOKIE["EjemploCookie2"];
echo "<br>";
echo "MI tercera cookie es: ". $_COOKIE["EjemploCookie3"];
echo "<br>";
?>