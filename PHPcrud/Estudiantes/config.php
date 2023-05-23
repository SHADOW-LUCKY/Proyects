<?php
require_once("db.php");
class Config{
    private $id;
    private $nombres;
    private $direcion;
    private $logros;
    protected $dbCnx;
    public function __construct($id=0, $nombres="", $direcion="", $logros=""){
        $this->id = $id;
        $this->nombres = $nombres;
        $this->direcion = $direcion;
        $this->logros = $logros;
    $this->dbCnx = new PDO(DB_TYPE."host:".DB_HOST.";dbname=".DB_NAME,DB_USER,DB_PWD,[PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
    }
}
?>