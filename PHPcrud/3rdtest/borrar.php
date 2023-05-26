<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("config.php");
$config = new Config();
if (isset($_GET['id'])&& isset($_GET['req'])) {
    if ($_GET['req']=="delete"){
       $config ->setID($_GET['id']);
       $config ->deleteSel();
       echo"<script>alert('datos borrados');document.location='estudiantes.php';</script>";
    }
}
?>