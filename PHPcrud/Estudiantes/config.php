<?php
require_once("db.php");
class Config{
    /* parametros */
    private $id;
    private $nombres;
    private $direcion;
    private $logros;
    protected $dbCnx;
    /* configuracion */
    public function __construct($id=0, $nombres="", $direcion="", $logros=""){
        $this->id = $id;
        $this->nombres = $nombres;
        $this->direcion = $direcion;
        $this->logros = $logros;
        /* linkeada a la base de datos */
        $this->dbCnx = new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
    }
    /* setters y getters */
    public function setID($id) {
        $this->id = $id;
    }
    public function getID($id) {
        return $this->id;
    }
    public function setNombres($nombres) {
        $this->nombres = $nombres;
    }
    public function getNombres() {
        return $this->nombres;
    }
    public function setDirecion($direcion) {
        $this->direcion = $direcion;
    }
    public function getDirecion() {
        return $this->direcion;
    }
    public function setLogros($logros) {
        $this->logros = $logros;
    }
    public function getLogros() {
        return $this->logros;
    }
    public function insertData(){
       try {
        $stm = $this->dbCnx->prepare("INSERT INTO campers(nombres,direcion,logros) values(?,?,?)");
        $stm->execute([$this->nombres, $this->direcion, $this->logros]);
       } catch (Exception $e) {
        return $e -> getMessage();
       }
    }
}
?>