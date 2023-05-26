<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
    if(isset($_POST['guardar'])){
        require_once("config.php");
        /* nuevo archivo config */
        $config = new Config();
        /* instancias */
        $config-> setNombres($_POST['nombres']);
        $config-> setDirecion($_POST['direcion']);
        $config-> setLogros($_POST['logros']);
        /* insertar datos en la tabla */
        $config->insertData(); 
        /* verificado si funciona */
        echo"<script>alert('los datos fueron ingresados exitosamente');document.location='estudiantes.php'</script>";
    }
?>
