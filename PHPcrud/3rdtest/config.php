<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("db.php");
class Config{
    private $id;
    private $nombre;
    private $descripcion;
    private $imagen;
    protected $dbCnx;/* conexion al db.php */
    /* constructor */
    public function __construct($id=0,$nombre="",$descripcion="",$imagen=""){
        $this->id= $id;
        $this->nombre= $nombre;
        $this->descripcion= $descripcion;
        $this->imagen= $imagen;
        /* comando de conexion */
        $this->dbCnx = new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    }
    /* setters */
    public function setID($id){
        $this->id= $id;
    }
    public function setNombre($nombre){
        $this->nombre= $nombre;
    }
    public function setDescripcion($descripcion){
        $this->descripcion= $descripcion;
    }
    public function setImagen($imagen){
        $this->imagen= $imagen;
    }
    /* getters */
    public function getID(){
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
    /* Funcion Subir */
    public function insertData(){
        try {
            $stm=$this->dbCnx->prepare("INSERT INTO categorias(categoria_nombre,descripcion,imagen) VALUES(?,?,?)");
            $stm->execute([$this->nombre,$this->descripcion,$this->imagen]);
        } catch (Exception $e) {
            return $e -> getMessage();
        }
    }
    /* funcion Fetch */
    public function selectAll(){
        try {
            /* seleccione todo lo que hay en la tabla */
            $stm=$this->dbCnx->prepare("SELECT * FROM categorias");
            $stm->execute();/* usamos los comandos de prepare */
            return $stm->fetchAll();
        } catch (Exception $e) {
            return $e -> getMessage();
        }
    }
    // funcion deletear
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM categorias WHERE categoria_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
    public function selectOne(){
        try {
            $stm = $this->dbCnx->prepare("SELECT * FROM categorias WHERE categoria_ID=?");
            $stm->execute([$this->id]);
            return $stm->fetchAll();
        } catch (Exception $e) {
            return $e -> getMessage();
        }
    }
    public function update(){
        try {          
            $stm = $this->dbCnx->prepare("UPDATE categorias SET categoria_nombre=?, descripcion=?, imagen=? WHERE categoria_ID=?");
            $stm->execute([$this->nombre,$this->descripcion,$this->imagen,$this->id]);
        } catch (Exception $e) {
            return $e -> getMessage();
        }
    }
}
?>