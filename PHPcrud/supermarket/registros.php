<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("configs.php");
if(isset($_POST['guardar'])){
    $log=$_POST['guardar'];
    if($log=="categorias"){
        $save =new Categorias();
        $save->setNombre($_POST['nombre']);
        $save->setDescripcion($_POST['descripcion']);
        $save->setImagen($_POST['url']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='categorias.php';</script>";
    }elseif ($log=="proveedores") {
        $save =new Proveedores();
        $save->setNombre($_POST['nombre']);
        $save->setTelefono($_POST['telefono']);
        $save->setCiudad($_POST['ciudad']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='proveedores.php';</script>";
    }elseif($log=="clientes") {
        $save =new Clientes();
        $save->setTelefono($_POST['telefono']);
        $save->setCompany($_POST['empresa']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='clientes.php';</script>";
    }elseif($log=="empleados"){
        $save =new Empleados();
        $save->setNombre($_POST['nombre']);
        $save->setCelular($_POST['telefono']);
        $save->setDireccion($_POST['direccion']);
        $save->setImagen($_POST['imagen']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='empleados.php';</script>";
    }elseif ($log =="productos"){ 
        $save =new Productos();
        $save->setNombre($_POST['nombre']);
        $save->setCategoria($_POST['categoria']);
        $save->setProveedor($_POST['proveedor']);
        $save->setStock($_POST['stock']);
        $save->setPreciounit($_POST['precioUnit']);
        $save->setUnitspedidas($_POST['unitsPedidas']);
        $save->setDescontinuado($_POST['descontinuado']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='productos.php';</script>";
    }
}

?>