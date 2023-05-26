<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
punto9
   <form action="" method="post">
        <label for="">nombre del atleta</label>
        <input type="text" name="nombre" >
        <label for="">cuanto salto</label>
        <input type="number" name="salto" >
        <input type="submit" name="sub" value="agregar">
        <input type="submit" name="sub" value="finalizar">
   </form>
   <?php
    session_start();
    if (isset($_POST['sub'])){
        if($_POST['sub'] == 'agregar'){
            $nombre = $_POST['nombre'];
            $salto = $_POST['salto'];
            array_push($_SESSION['nombres'],$nombre);
            array_push($_SESSION['saltos'],$salto);
        }else if($_POST['sub'] == 'finalizar'){
            $names = $_SESSION['nombres'];
            $jumps = $_SESSION['saltos'];
            $max = max($jumps);
            $key =array_keys($jumps,$max);
            $keyN = $key[0];
            $auth = $names[$keyN];
            echo "record : $max";
            echo" persona : $auth";
        }   
    }else{
        $_SESSION['saltos']=[];
        $_SESSION['nombres']=[];
    }
   ?>
</body>
</html>
