<?php
require_once("config/db.php");
require_once("config/conectar.php");
class Estudiantes extends Conectar{
    /* parametros */
    private $id;
    private $nombres;
    private $direcion;
    private $logros;
    protected $dbCnx;
    /* configuracion */
    public function __construct($id=0, $nombres="", $direcion="", $logros="",$dbcnx=""){
        $this->id = $id;
        $this->nombres = $nombres;
        $this->direcion = $direcion;
        $this->logros = $logros;
        parent::__construct($dbCnx);
        /* linkeada a la base de datos */
    /*     $this->dbCnx = new PDO(DB_TYPE.":host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PWD, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]); */
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
            return $stm->fetchAll();/* metodo que saca todo(palabar reservada para PDO) */
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
    /* el signo de interrogacion simboliza los parametros */
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
    /* selecciona uno en especifico para luego editarlo */
    public function selectOne(){
        try {
            $stm = $this->dbCnx->prepare("SELECT * FROM campers WHERE id=?");
            $stm->execute([$this->id]);
        return $stm -> fetchAll();
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
    /* funcion para actualizar */
    public function update(){
        try {
            /* palabra SET con UPDATE cambia los parametros seleccionados*/
        $stm = $this->dbCnx->prepare("UPDATE campers SET nombres=?,direcion=?,logros=? WHERE id=?");
        /* con que valores debe ejecutarse los comandos en prepare  */
        $stm->execute([$this->nombres, $this->direcion, $this->logros, $this->id]);
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
}
class Register extends Conectar{
    private $id;
    private $id_camper;
    private $email;
    private $username;
    private $password;
    public function __construct($id=0,$id_camper=0, $email="", $username="", $password="",$dbCnx=""){
        $this->id = $id;
        $this->id_camper = $id_camper;
        $this->email = $email;
        $this->username = $username;
        $this->password = $password;
        parent::__construct($dbCnx);
    }    
    /* setters & getters*/
    public function setId($id){
        $this->id = $id;
    }
    public function getId(){
        return $this->id;
    }
    public function setEmail($email){
        $this->email = $email;
    }
    public function getEmail(){
        return $this->email;
    }
    public function setUsername($username){
        $this->username = $username;
    }
    public function getUsername(){
        return $this->username;
    }
    public function setPassword($password){
        $this->password = $password;
    }
    public function getPassword(){
        return $this->password;
    }
    public function setIdcamper($id_camper){
        $this->id_camper = $id_camper;
    }
    public function getIdcamper(){
        return $this->id_camper;
    }
    /* metodos */
    public function checkUser($email){
        try{
            $stat = $this->dbCnx->prepare("SELECT * FROM users WHERE email='$email'");
            $stat->execute();
            if($stat->fetchColumn())/* si devuelve algo significa que es verdad*/{
                return true;
            }else{
                return false;
            }
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO users(ID_camper,username,email,password) VALUES(?,?,?,?)");
            $stat -> execute([$this->id_camper,$this->username,$this->email,md5($this->password)]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }  
}
class LoginUser extends Conectar{
    private $id;
    private $email;
    private $password;
    public function __construct($id=0, $email="", $password="",$dbCnx=""){
        $this->id = $id;
        $this->email = $email;
        $this->password = $password;
        parent::__construct($dbCnx);
    }    
    /* setters & getters*/
    public function setId($id){
        $this->id = $id;
    }
    public function getId(){
        return $this->id;
    }
    public function setEmail($email){
        $this->email = $email;
    }
    public function getEmail(){
        return $this->email;
    }
    public function setPassword($password){
        $this->password = $password;
    }
    public function getPassword(){
        return $this->password;
    }
    /* metodos */
    public function fetchAll(){
        try {
            $stm = $this->dbCnx->prepare("SELECT * FROM users");/* prepara una sentencia(el * se refiere a todos ) */
            $stm->execute();/* ejecuta las sentencias en prepare */
            return $stm->fetchAll();/* metodo que saca todo(palabar reservada para PDO) */
        } catch (Exception $e) {
            return $e -> getMessage();/* si hay un error lo saca */
        }
    }
    public function login(){
      try{
        $stat=$this->dbCnx->prepare("SELECT * FROM users WHERE email=? AND password=?",);
        $stat->execute([$this->email,md5($this->password)]);
        $user = $stat->fetchAll();
        if(count($user)>0){
            session_start();
            $_SESSION['id'] = $user[0]['id'];
            $_SESSION['email'] = $user[0]['email'];
            $_SESSION['password'] = $user[0]['password'];
            return true;
        }else{
            false;
        }
      }catch (Exception $e){
        return $e->getMessage();
      }
    }
}
?>