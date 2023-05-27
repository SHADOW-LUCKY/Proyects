<?php
require_once("db.php");
class Categorias {
    // variables 
    private $id;
    private $nombre;
    private $descripcion;
    private $imagen;
    protected $dbCnx;
    // constructor
    public function __construct($id=0, $nombre="", $descripcion="", $imagen=""){
        $this->id= $id;
        $this->nombre= $nombre;
        $this->descripcion= $descripcion;
        $this->imagen= $imagen;
        $this->dbCnx=new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    }
    // setters
    public function setID($id) {    
        $this->id = $id;
    }
    public function setNombre($nombre) { 
        $this->nombre = $nombre;
    }
    public function setDescripcion($descripcion){
        $this->descripcion = $descripcion;
    }
    public function setImagen($imagen) {    
        $this->imagen = $imagen;
    }
    // getters
    public function getID(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getDescripcion() {
        return $this->descripcion;
    }
    public function getImagen() {
        return $this->imagen;
    }
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO categorias(categoria_nombre,categoria_descripcion,categoria_imagen) VALUES(?,?,?)");
            $stat -> execute([$this->nombre,$this->descripcion,$this->imagen]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM categorias");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
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
}
class Proveedores {
    // variables
    private $id;
    private $nombre;
    private $telefono;
    private $ciudad;
    protected $dbCnx;
    // constructor
    public function __construct($id=0, $nombre="", $telefono="", $ciudad=""){
        $this->id= $id;
        $this->nombre= $nombre;
        $this->telefono= $telefono;
        $this->ciudad= $ciudad;
        $this->dbCnx=new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    }
    // setters
    public function setID($id){
        $this->id=$id;
    }
    public function setNombre($nombre){
        $this->nombre= $nombre;
    }
    public function setTelefono($telefono){
        $this->telefono=$telefono;
    }
    public function setCiudad($ciudad) {
        $this->ciudad=$ciudad;
    }
    // getters
    public function getID(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getTelefono(){
        return $this->telefono;
    }
    public function getCiudad(){
        return $this->ciudad;
    }
    // metodos
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO proveedores(proveedor_nombre,proveedor_telefono,proveedor_ciudad) VALUES(?,?,?)");
            $stat -> execute([$this->nombre,$this->telefono,$this->ciudad]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM proveedores");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM proveedores WHERE proveedor_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
}
class Clientes{
    // variables
    private$id;
    private$telefono;
    private$company;
    protected $dbCnx;
    // constructor
    public function __construct($id=0,$telefono="",$company=""){
        $this->id=$id;
        $this->telefono=$telefono;
        $this->company=$company;
        $this->dbCnx=new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);;
    }
    // setters
    public function setID($id){
        $this->id=$id;
    }
    public function setCompany($company){
        $this->company= $company;
    }
    public function setTelefono($telefono){
        $this->telefono=$telefono;
    }
    // getters
    public function getID(){
        $this->id;
    }
    public function getCompany(){
        $this->company;
    }
    public function getTelefono(){
        $this->telefono;
    }
    // metodos
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO clientes(cliente_celular,cliente_company) VALUES(?,?)");
            $stat -> execute([$this->telefono,$this->company]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM clientes");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM clientes WHERE cliente_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
 }
?>