<?php

class Conectar{
    protected $db;
    protected function Conexion(){
        try {
            $conectar = $this->db = new PDO("mysql:local=localhost;dbname=estadisticas", "campus","campus2023");
            return $conectar;

        } catch (Exeption $e) {
            return $e->getMessage();
            die();// en caso de lanzamiento que trunque la conexión
        }
    }

    public function set_name(){
        return $this->db->query("SET NAMES 'utf8'");
    }

}

?>