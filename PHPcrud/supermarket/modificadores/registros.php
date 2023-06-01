<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("../configs.php");
if(isset($_POST['guardar'])){
    $log=$_POST['guardar'];
    if($log=="categorias"){
        $save =new Categorias();
        $save->setNombre($_POST['nombre']);
        $save->setDescripcion($_POST['descripcion']);
        $save->setImagen($_POST['url']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='../categorias.php';</script>";
    }elseif ($log=="proveedores") {
        $save =new Proveedores();
        $save->setNombre($_POST['nombre']);
        $save->setTelefono($_POST['telefono']);
        $save->setCiudad($_POST['ciudad']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='../proveedores.php';</script>";
    }elseif($log=="clientes") {
        $save =new Clientes();
        $save->setTelefono($_POST['telefono']);
        $save->setCompany($_POST['empresa']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location='../clientes.php';</script>";
    }elseif($log=="empleados"){
        $save =new Empleados();
        $save->setNombre($_POST['nombre']);
        $save->setCelular($_POST['telefono']);
        $save->setDireccion($_POST['direccion']);
        $save->setImagen($_POST['imagen']);
        $save->insertData();
        echo"<script>alert('datos enviados');document.location=../'empleados.php';</script>";
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
        echo"<script>alert('datos enviados');document.location='../productos.php';</script>";
    }elseif ($log =="facturas") {
        $save =new Venta();
        $save->setFecha($_POST['fecha']);
        $save->setEmpleado($_POST['empleado']);
        $save->setCliente($_POST['cliente']);
        $save->insertData();
        $facID = $save->getLastID();
        $save->setFactura($facID);
        $save->setProcvendido($_POST['producto']);
        $save->setCantidad($_POST['cantidad']);
        $save->setPrecio($_POST['total']);
        $save->insertDatafac();
        echo"<script>alert('datos enviados');document.location='../facturas.php';</script>";
    }elseif ($log=="usuario"){
        $logout=new Empleados();
        $token=false;
        $iterate=$logout->selectAll();
        $save = new Registro();
        $save ->setNombre($_POST['user']);
        $save ->setEmail($_POST['email']);
        $save ->setPassword($_POST['password']);
        $save ->setEmpleado($_POST['userid']);
        $save ->setRole($_POST['keytime']);
        foreach ($iterate as $key => $val) {
            if($val['empleado_ID']==$_POST['userid']){
                $token=true;
            }
        }   
        if ($token==true) {
            if($save->checkList($_POST['email'])){
                echo"<script>alert('email ya registrado');document.location='../loginRegister.php';</script>";   
            }else{
                $save->insertData();
                echo"<script>alert('usuario hecho');document.location='../loginRegister.php';</script>";
            }
        } else {
            echo"<script>alert('no tienes el id de un empleado');document.location='../loginRegister.php';</script>";
        }
    }elseif ($log=="login") {
        session_start();
        $save = new Login();
        $save->setEmail($_POST['email']);
        $save->setPassword($_POST['password']);
        $login= $save->login();
        /* verificamos */
        if($login){
            header('location:../Home/home.php');
        }else{
            echo"<script>alert('password o email invalidos');document.location='../loginRegister.php';</script>";
        }
    }elseif ($log=="salir") {
        unset($_SESSION['id']);
        echo"<script>alert('sesion cerrada');document.location='../loginRegister.php';</script>";
    }
}

?>