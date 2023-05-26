<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("config.php");
$config= new Config();
    if(isset($_POST['guardar'])){
        $config->setNombre($_POST['nombre']);
        $config->setDescripcion($_POST['descripcion']);
        $config->setImagen($_POST['url']);
        $config->insertData();
        echo"<script>alert('datos enviados');document.location='estudiantes.php';</script>";
    }
?>