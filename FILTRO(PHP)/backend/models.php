<?php
require_once 'conexion.php';
class Pais extends Conectar{
    /* obtenemos los paises */
    public function getPais(){
      try {
        $conectar = parent::conexion();/*  sacamos la conexion de el archivo conexion*/
        parent::set_name();
        $stat=$conectar->prepare("SELECT * FROM pais");
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
      } catch (Exception $e) {
        return $e->getMessage();
      }
    }
    /* insertamos los paises */
    public function insertPais($pais){
        $conectar = parent::conexion();
        parent::set_name();
        $stat=$conectar->prepare("INSERT INTO pais (nombrePais) VALUES (?)");
        $stat->bindValue(1, $pais);
        $stat->execute();
        return $stat;

    }
    /* borramos los paises */
    public function deletePais($id){
      $conectar = parent::conexion();
      parent::set_name();
      $stat=$conectar->prepare("DELETE FROM pais WHERE idPais=?");
      $stat->bindValue(1, $id);
      $stat->execute();
      return $stat;
    }
}
class Departamento extends Conectar{
    /* obtenemos los departamentos */
    public function getDep(){
      try {
        $conectar = parent::conexion();/*  sacamos la conexion de el archivo conexion*/
        parent::set_name();
        $stat=$conectar->prepare("SELECT * FROM departamento");
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
      } catch (Exception $e) {
        return $e->getMessage();
      }
    }
    /* insertamos los departamentos */
    public function insertDep($departamento , $idPais){
        $conectar = parent::conexion();
        parent::set_name();
        $stat=$conectar->prepare("INSERT INTO departamento (nombreDep, idPais) VALUES (?,?)");
        $stat->bindValue(1, $departamento);
        $stat->bindValue(2, $idPais);
        $stat->execute();
        return $stat;
    }
    /* borramos los departamentos */
    public function deleteDep($id){
      $conectar = parent::conexion();
      parent::set_name();
      $stat=$conectar->prepare("DELETE FROM departamento WHERE idDep=?");
      $stat->bindValue(1, $id);
      $stat->execute();
      return $stat;
    }
}
class Regiones extends Conectar{
    /* obtenemos los regiones */
    public function getReg(){
      try {
        $conectar = parent::conexion();/*  sacamos la conexion de el archivo conexion*/
        parent::set_name();
        $stat=$conectar->prepare("SELECT * FROM region");
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
      } catch (Exception $e) {
        return $e->getMessage();
      }
    }
    /* insertamos los regiones */
    public function insertReg($region, $idDep){
        $conectar = parent::conexion();
        parent::set_name();
        $stat=$conectar->prepare("INSERT INTO region(nombreReg, idDep) VALUES (?,?)");
        $stat->bindValue(1, $region);
        $stat->bindValue(2, $idDep);
        $stat->execute();
        return $stat;
    }
    /* borramos los regiones */
    public function deleteReg($id){
      $conectar = parent::conexion();
      parent::set_name();
      $stat=$conectar->prepare("DELETE FROM region WHERE idReg=?");
      $stat->bindValue(1, $id);
      $stat->execute();
      return $stat;
    }
}
class Campers extends Conectar{
    /* obtenemos los campers */
    public function getCampers(){
      try {
        $conectar = parent::conexion();/*  sacamos la conexion de el archivo conexion*/
        parent::set_name();
        $stat=$conectar->prepare("SELECT * FROM campers");
        $stat->execute();
        return $stat->fetchAll(PDO::FETCH_ASSOC);
      } catch (Exception $e) {
        return $e->getMessage();
      }

    }
    /* insertamos los campers */
    public function insertCampers($campers){
        
    }
}
?>
