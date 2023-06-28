<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once '../conexion.php';
require_once '../models.php';
header('Content-Type: application/json');


$getCamp=new Campers();
$body=json_decode(file_get_contents('php://input'),true);

switch($_GET['op']){
    case 'GetCamp':
        $data=$getCamp->getCampers();
        echo json_encode($data);
        break;
/*     case 'insCamp':
        $data=$getCamp->insertCamp($body['nombreCamp']);
        echo json_encode($data);
        break;
    case 'delCamp':
        $data=$getCamp->deleteCamp($body['idCamp']);
        echo json_encode($data); */
    default:
        echo 'error';
        break;

}
?>