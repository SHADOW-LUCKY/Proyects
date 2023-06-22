<?php
require_once("conexion/conexion.php");
class Categorias extends Conectar{
    /* variables */
    private $id;
    private $nombre;
    private $descripcion;
    private $imagen;
    protected $dbCnx;
    public function __construct($id=0 , $nombre="", $descripcion="", $imagen="", $dbCnx = ""){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
        $this->imagen = $imagen;
        parent::__construct($dbCnx);
    }
    /* Getters */
    public function getId(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getDescripcion(){
        return $this->descripcion;
    }
    public function getImagen(){
        return $this->imagen;
    }
    /* Setters */
    public function setId($id){
        $this->id = $id;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
    public function setDescripcion($descripcion){
        $this->descripcion = $descripcion;
    }
    public function setImagen($imagen){
        $this->imagen = $imagen;
    }
    /* Metodos */
    public function insert(){
        try {
            $sql = "INSERT INTO categorias (CategoriaNombre, Descripcion, Imagen) VALUES (?, ?, ?)";
            $stm = $this->dbCnx->prepare($sql);
            $stm->bindValue(1, $this->nombre);
            $stm->bindValue(2, $this->descripcion);
            $stm->bindValue(3, $this->imagen);
            $stm->execute();
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll(){
        try {
            $sql ="SELECT * FROM categorias";
            $stm = $this->dbCnx->prepare($sql);
            $stm->execute();
            return $stm->fetchAll();/* retornar todos los datos */
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function delete(){
        try {
            $sql = "DELETE FROM categorias WHERE CategoriaID=?";
            $stm = $this->dbCnx->prepare($sql);
            $stm->bindValue(1, $this->id);
            $stm->execute();
        } catch (Exception $e) {
            $e->getMessage();
        }
    }

    
        
}
?>