<?php
require_once("../config/conectar.php");
class Camper extends Conectar{
    public function get_camper(){
        $conectar = parent::Conexion(); 
        parent::set_name();
        $stat = $conectar->prepare("SELECT * FROM campers");
        $stat -> execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
    }

    public function get_camper_id($id){
        $conectar = parent::Conexion(); 
        parent::set_name();
        $stat = $conectar->prepare("SELECT * FROM campers WHERE id =?");
        $stat->bindValue(1,$id);
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
    }
    public function post_camper($id, $imagen, $nombre, $edad, $promedio, $nivelCAmpus, $nivelIngles, $especialidad, $direccion, $celular, $Ingles, $Ser, $Review, $Skills, $Asitencia){
        $conectar = parent::Conexion(); 
        parent::set_name();
        $stat ="INSERT INTO campers (id, imagen, nombre, edad, promedio, nivelCAmpus, nivelIngles, especialidad, direccion, celular, ingles, Ser, Review, Skills, Asitencia) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stat=$conectar->prepare($stat);
        $stat->bindValue(1,$id);
        $stat->bindValue(2,$imagen);
        $stat->bindValue(3,$nombre);
        $stat->bindValue(4,$edad);
        $stat->bindValue(5,$promedio);
        $stat->bindValue(6,$nivelCAmpus);
        $stat->bindValue(7,$nivelIngles);
        $stat->bindValue(8,$especialidad);
        $stat->bindValue(9,$direccion);
        $stat->bindValue(10,$celular);
        $stat->bindValue(11,$Ingles);
        $stat->bindValue(12,$Ser);
        $stat->bindValue(13,$Review);
        $stat->bindValue(14,$Skills);
        $stat->bindValue(15,$Asitencia);
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>