<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("config.php");
    if(isset($_POST['guardar'])){
        /* nuevo archivo config */
        $config = new Estudiantes();
        /* instancias */
        $config-> setNombres($_POST['nombres']);
        $config-> setDirecion($_POST['direcion']);
        $config-> setLogros($_POST['logros']);
        /* insertar datos en la tabla */
        $config->insertData(); 
        /* verificado si funciona */
        echo"<script>alert('los datos fueron ingresados exitosamente');document.location='estudiantes.php'</script>";
    }elseif (isset($_POST['registrarse'])){
        $config = new Register();
        /* instancias */
        $config->setIdcamper(1);
        $config->setUsername($_POST['user']);
        $config->setPassword($_POST['password']);
        $config->setEmail($_POST['email']);
        /* verificar */
        if($config->checkUser($_POST['email'])){
            echo"<script>alert('usted ya esta en la base de datos mi loco');document.location='loginRegister.php'</script>";
        }else{
            /* insertar datos */
            $config->insertData(); 
        /* verificado si funciona */
            echo"<script>alert('Registro hecho');document.location='./Home/home.html'</script>";
        }
    }elseif (isset($_POST['loguearse'])) {/* login y entrar */
        session_start();
        $credenciales= new loginUser();
        /* nuevo login */
        $credenciales->setEmail($_POST['email']);
        $credenciales->setPassword($_POST['password']);
        /* sacamos los valores */
        $login= $credenciales->login();
        /* verificamos */
        if($login){
            header('location:./Home/home.html');
        }else{
            echo"<script>alert('password o email invalidos');document.location='loginRegister.php';</script>";
        }
    }
?>
