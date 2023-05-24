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
        $config-> setDireccion($_POST['direccion']);
        $config-> setLogros($_POST['logros']);
        $config-> setEspecialidad($_POST['especialidad']);
        $config-> setNotaIngles($_POST['notaIngles']);
        $config-> setNotaSer($_POST['notaSer']);
        $config-> setNotaSkills($_POST['notaSkills']);
        $config-> setNotaReview($_POST['notaReview']);
        /* insertar datos en la tabla */
        $config->insertData(); 
        /* verificado si funciona */
        echo"<script>alert('los datos fueron ingresados exitosamente');document.location='estudiantes.php'</script>";
    }
?>
