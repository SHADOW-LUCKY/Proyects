<?php
class Conectar{
    protected $dbCnx;
    protected function conexion(){
        try {/* PDO define la conexion a la base de datos con su anfitrion nombre de la bas de datos y usuario y contraseña */
            $conectar = $this->dbCnx = new PDO('mysql:host=localhost;dbname=campuslands','campus','campus2023');
            return $conectar;
        } catch (Exception $e) {
           return $e->getMessage();
        }
    }
    public function set_name(){
        $this->dbCnx->query("SET NAMES 'utf8'");/*establece los caracteres que usa la base de datos */
    }
}
?>