<?php
$nota1 = $_POST['nota1'];
$nota2 = $_POST['nota2'];
$nota3 = $_POST['nota3'];
$promedio = ($nota1+$nota2+$nota3)/3;
if ($promedio <= 3.9){echo 'estudie';}else{ echo 'becado';}
?>
