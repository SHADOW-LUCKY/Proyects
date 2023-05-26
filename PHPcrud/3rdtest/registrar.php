<?php
require_once("config.php");
$config= new Config();
    if(isset($_POST)){
        $config->setNombre($_POST['nombre']);
        $config->setDescripcion($_POST['descripcion']);
        $config->setImagen($_POST['imagen']);
        $config->insertData();
        echo"<script>alert('datos enviados')</script>;document.location='estudiantes.php';";
    }
?>