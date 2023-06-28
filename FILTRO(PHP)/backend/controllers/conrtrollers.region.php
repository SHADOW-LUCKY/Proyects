<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once '../conexion.php';
require_once '../models.php';
header('Content-Type: application/json');


$getReg=new Regiones();
$body=json_decode(file_get_contents('php://input'),true);

switch($_GET['op']){
    case 'GetReg':
        $data=$getReg->getReg();
        echo json_encode($data);
        break;
    case 'insReg':
        $data=$getReg->insertReg($body['nombreReg'],$body['idDep']);
        echo json_encode($data);
        break;
    case 'delReg':
        $data=$getReg->deleteReg($body['idReg']);
        echo json_encode($data);
    default:
        echo 'error';
        break;

}
?>