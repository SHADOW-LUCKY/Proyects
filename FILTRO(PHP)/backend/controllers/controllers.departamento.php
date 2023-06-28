<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once '../conexion.php';
require_once '../models.php';
header('Content-Type: application/json');


$getDep=new Departamento();
$body=json_decode(file_get_contents('php://input'),true);

switch($_GET['op']){
    case 'GetDep':
        $data=$getDep->getDep();
        echo json_encode($data);
        break;
    case 'insDep':
        $data=$getDep->insertDep($body['nombreDep'],$body['idPais']);
        echo json_encode($data);
        break;
    case 'delDep':
        $data=$getDep->deleteDep($body['idDep']);
        echo json_encode($data);
    default:
        echo 'error';
        break;

}
?>