<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
    require_once ("config.php");
    $record = new Config();
    if (isset($_GET['id'])&& isset($_GET['req'])){
        if (isset($_GET['req'])== "delete"){
            $record->setID($_GET['id']);
            $record->delete();
         /* verificado si funciona */
        echo"<script>alert('los datos fueron borrados exitosamente');document.location='estudiantes.php'</script>";
        }
    }
?>