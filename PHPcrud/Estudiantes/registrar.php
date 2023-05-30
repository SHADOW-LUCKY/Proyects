<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("config.php");
    if(isset($_POST['guardar'])){
        /* nuevo archivo config */
        $config = new Estudiantes();
        /* instancias */
        $config-> setNombres($_POST['nombres']);
        $config-> setDirecion($_POST['direcion']);
        $config-> setLogros($_POST['logros']);
        /* insertar datos en la tabla */
        $config->insertData(); 
        /* verificado si funciona */
        echo"<script>alert('los datos fueron ingresados exitosamente');document.location='estudiantes.php'</script>";
    }elseif (isset($_POST['registrarse'])){
        $config = new Register();
        /* instancias */
        $config->setIdcamper(1);
        $config->setUsername($_POST['user']);
        $config->setPassword($_POST['password']);
        $config->setEmail($_POST['email']);

        /* insertar datos */
        $config->insertData(); 
        /* verificado si funciona */
        echo"<script>alert('Registro hecho');document.location='loginRegister.php'</script>";
    }
?>
