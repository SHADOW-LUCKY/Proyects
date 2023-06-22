<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("../categorias.php");
if (isset($_GET['id'])) {
    $save = new Categorias();
    $save->setId($_GET['id']);
    $save->delete();
    echo "<script>alert('Registro eliminado')document.location='../index.php</script>";
}
?>