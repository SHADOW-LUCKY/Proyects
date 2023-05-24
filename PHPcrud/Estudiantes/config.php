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
    public function insertData(){/* meter datos en un tabla */
       try {
        $stm = $this->dbCnx->prepare("INSERT INTO campers(nombres,direcion,logros) values(?,?,?)");
        $stm->execute([$this->nombres, $this->direcion, $this->logros]);
       } catch (Exception $e) {
        return $e -> getMessage();
       }
    }
    public function selectAll()/* seleccion de los datos */{
        try {
            $stm = $this->dbCnx->prepare("SELECT * FROM campers");/* prepara una sentencia(el * se refiere a todos ) */
            $stm->execute();/* ejecuta las sentencias en prepare */
            return $stm->fetchAll();/* metodo que saca todo */
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
    public function delete(){
        try {
            $stm = $this->dbCnx->prepare("DELETE FROM campers WHERE id=?"/*where es adonde se dirige  */);
            $stm->execute([$this->id])/* es un metodo nativo */;
            return $stm -> fetchAll();
            echo"<script>alert('borrado exitosamente');document.location='estudiantes.php'</script>";
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
}
?>