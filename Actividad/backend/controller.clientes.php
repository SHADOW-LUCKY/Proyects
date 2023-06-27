<?php
require_once 'conexion.php';
require_once 'models.php';
header('Content-Type: application/json');


$getCli=new Clientes();
$body=json_decode(file_get_contents('php://input'),true);

switch($_GET['op']){
    case 'GetCli':
        $data=$getCli->getClientes();
        echo json_encode($data);
        break;
    case 'InsertCli':
        $data=$getCli->insertCli($body['nombre_constructora'], $body['nit_constructora'], $body['nombre_representante'], $body['email_contacto'], $body['telefono_contacto']);
        echo json_encode('success');
        break;
    case "DeleteCli":
            $data=$getCli->deleteCli($body['id_constructora']);
            echo json_encode("success");
            break;
    default:
        echo 'error';
        break;
    
}
?>