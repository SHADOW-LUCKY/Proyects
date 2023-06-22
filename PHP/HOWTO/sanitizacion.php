<?php

$cd_script = '<script>alert("Hola, soy un script malvado");</script>';

/* echo $cd_script; */

$ejemploSanatizacion = filter_var($cd_script, FILTER_SANITIZE_STRING);
echo "<br>";
echo $ejemploSanatizacion;
?>