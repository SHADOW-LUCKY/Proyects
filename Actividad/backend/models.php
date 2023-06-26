<?php
require_once 'conexion.php';
class Clientes extends Conexion{

    public function getClientes(){
        try {
            $conectar =parent::conexion();
            parent::set_name();
            $stat=$conectar->prepare("SELECT * FROM constructoras");
            $stat->execute();
            return $stat->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    public function insertCli($nombre_constructora, $nit_constructora, $nombre_representante, $email_contacto, $telefono_contacto){
        $conectar =parent::conexion();
        parent::set_name();
       try {
        $sql="INSERT INTO constructoras(nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto) VALUES (?,?,?,?,?)";
        $stat=$conectar->prepare($sql);
        $stat->bindValue(1, $nombre_constructora);
        $stat->bindValue(2, $nit_constructora);
        $stat->bindValue(3, $nombre_representante);
        $stat->bindValue(4, $email_contacto);
        $stat->bindValue(5, $telefono_contacto);
        $stat->execute();
        return $stat;
        
       } catch (Exception $e) {
           return $e->getMessage();
       }
    }
    public function delete($id) {
        $conectar=parent::Conexion();
        parent::set_name();
        $sql="DELETE FROM constructoras WHERE id_constructora=?";
        $sql=$conectar->prepare($sql);
        $sql->bindvalue(1,$id);
        $sql->execute();
        return $resultados=$sql->fetchAll(PDO::FETCH_ASSOC);
    }

}
?>