<?php
Class Conexion{
    protected $db;
    protected function conexion(){
        try {/* PDO define la conexion a la base de datos con su anfitrion nombre de la bas de datos y usuario y contraseña */
            $conectar = $this->db = new PDO('mysql:host=localhost;dbname=FacturaArtemis2','root','');
            return $conectar;
        } catch (Exception $e) {
           return $e->getMessage();

        }
    }

    public function set_name()
    {/* le dael tipo de escritura de la base de datos(en este caso utf8) */
        return $this->db->query("SET NAMES 'utf8'");
    }
}
?>