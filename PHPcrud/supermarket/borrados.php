<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("configs.php");

if (isset($_GET['id'])&& isset($_GET['req'])) {
    if ($_GET['req']=="deletecate"){
        $delete = new Categorias();
        $delete ->setID($_GET['id']);
        $delete ->deleteSel();
        echo"<script>alert('datos borrados');document.location='categorias.php';</script>";
    }elseif ($_GET['req']=="deleteprov") {
        $delete = new Proveedores();
        $delete ->setID($_GET['id']);
        $delete ->deleteSel();
        echo"<script>alert('datos borrados');document.location='proveedores.php';</script>";
    }elseif ($_GET['req']=="deletecli") {
        $delete = new Clientes();
        $delete ->setID($_GET['id']);
        $delete ->deleteSel();
        echo"<script>alert('datos borrados');document.location='clientes.php';</script>";
    }elseif($_GET['req']=="deleteemp"){
        $delete = new Empleados();
        $delete->setID($_GET['id']);
        $delete->deleteSel();
        echo"<script>alert('datos borrados');document.location='empleados.php';</script>";
    }elseif($_GET['req']=="deletepro"){
        $delete = new Productos();
        $delete ->setID($_GET['id']);
        $delete ->deleteSel();
        echo"<script>alert('datos borrados');document.location='productos.php';</script>";
    }
}
?>