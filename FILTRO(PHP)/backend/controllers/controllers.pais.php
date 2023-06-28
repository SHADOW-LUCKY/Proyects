<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once '../conexion.php';
require_once '../models.php';
header('Content-Type: application/json');


$getPais=new Pais();
$body=json_decode(file_get_contents('php://input'),true);

switch($_GET['op']){
    case 'GetPais':
        $data=$getPais->getPais();
        echo json_encode($data);
        break;
    case 'insPais':
        $data=$getPais->insertPais($body['nombrePais']);
        echo json_encode($data);
        break;
    case 'delPais':
        $data=$getPais->deletePais($body['idPais']);
        echo json_encode($data);
    default:
        echo 'error';
        break;

}
?>