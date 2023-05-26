<?php
 $cuadrado = $_POST["cuadrado"];
 $base = $_POST["base"];
 $altura = $_POST["altura"];

 $perimetro = $cuadrado * 4 ;
 $area =( $base * $altura);
 echo "El Perimetro del cuadrado es {$perimetro}<br>";
 echo "El Area del Rectangulo es {$area}<br>";
?>