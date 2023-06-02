<?php
 ini_set("display_errors", 1);

 ini_set("display_startup_errors", 1);
 
 error_reporting(E_ALL);
$log = $_POST['logout'];
if ($log=="salir") {
    unset($_SESSION['id']);
    unset($_SESSION['email']);
    unset($_SESSION['password']);
    echo"<script>alert('session cerrada');document.location='../loginRegister.php';</script>";
}
?>