<?php
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("db.php");
class Config{
    /* parametros */
    private $id;
    private $nombres;
    private $direccion;
    private $logros;
    private $especialidad;
    private $notaIngles;
    private $notaSer;
    private $notaSkills;
    private $notaReview;
    protected $dbCnx;
    /* configuracion */
    public function __construct($id=0, $nombres="", $direccion="", $logros="",$especialidad="",$notaIngles=0,$notaSer=0,$notaSkills=0,$notaReview=0){
        $this->id = $id;
        $this->nombres = $nombres;
        $this->direccion = $direccion;
        $this->logros = $logros;
        $this->especialidad = $especialidad;
        $this->notaIngles = $notaIngles;
        $this->notaSer = $notaSer;
        $this->notaSkills = $notaSkills;
        $this->notaReview = $notaReview;
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
    public function setDireccion($direccion) {
        $this->direccion = $direccion;
    }
    public function getDireccion() {
        return $this->direccion;
    }
    public function setLogros($logros) {
        $this->logros = $logros;
    }
    public function getLogros() {
        return $this->logros;
    }
    public function setEspecialidad($especialidad) {
        $this->especialidad = $especialidad;
    }
    public function getEspecialidad() {
        return $this->especialidad;
    }
    public function setNotaIngles($especialidad) {
        $this->especialidad = $especialidad;
    }
    public function getNotaIngles() {
        return $this->notaIngles;
    }
    public function setNotaSer($notaSer) {
        $this->notaSer = $notaSer;
    }
    public function getNotaSer() {
        return $this->notaSer;
    }
    public function setNotaSkills($notaSkills) {
        $this->notaSkills = $notaSkills;
    }
    public function getNotaSkills() {
        return $this->notaSkills;
    }
    public function setNotaReview($notaReview) {
        $this->notaReview = $notaReview;
    }
    public function getNotaReview() {
        return $this->notaReview;
    }
    public function insertData(){/* meter datos en un tabla */
       try {
        $stm = $this->dbCnx->prepare("INSERT INTO campers2(nombres,direccion,logros,especialidad,notaIngles,notSer,notaSkills,notaReview) values(?,?,?,?,?,?,?,?)"); 
        $stm->execute([$this->nombres, $this->direccion, $this->logros,$this->notaIngles,$this->notaSer,$this->notaSkills,$this->notaReview]);
       } catch (Exception $e) {
        return $e -> getMessage();
       }
    }
    public function selectAll()/* seleccion de los datos */{
        try {
            $stm = $this->dbCnx->prepare("SELECT * FROM campers2");/* prepara una sentencia(el * se refiere a todos ) */
            $stm->execute();/* ejecuta las sentencias en prepare */
            return $stm->fetchAll();/* metodo que saca todo */
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
    public function delete(){
        try {
            $stm = $this->dbCnx->prepare("DELETE FROM campers2 WHERE id=?");
            $stm->execute([$this->id])/* es un metodo nativo */;
            return $stm -> fetchAll();
            echo"<script>alert('borrado exitosamente');document.location='estudiantes.php'</script>";
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
}
?>