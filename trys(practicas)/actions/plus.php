<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("../categorias.php");
if (isset($_POST['guardar'])) {
    $save=new Categorias();
    $save->setNombre($_POST['nombre']);
    $save->setDescripcion($_POST['descripcion']);
    $save->setImagen($_POST['imagen']);
    $save->insert();
    echo "<script>alert('Registro agregado')document.location='../index.php</script>";
}
?>