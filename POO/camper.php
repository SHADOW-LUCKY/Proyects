<?php
    class Camper
    {   
    /*definir atributos con modificadores de acesso*/
    private $nombre ;
    private $email ;
    private $telefono ;

    /*se usara un constructor*/
    public function __construct($nombre, $email, $telefono){
        $this->nombre = $nombre;
        $this->email = $email;
        $this->telefono = $telefono;
    }
    /* metodos Getters y Setters */
    public function getNombre(){
        return $this->nombre;
    }
    public function getEmail(){
            return $this->email;
    }
    public function getTelefono(){
            return $this->telefono;
    }
    /* metodos Setter */
    public function setNombre($nombre){
        $this->nombre = $nombre;
        return $this;
    }
    public function setEmail($email){
        $this->email = $email;
        return $this;
    }
    public function setTelefono($telefono){
        $this->telefono = $telefono;
        return $this;
    }
    public function saludo($saludo)
    {
        return $saludo ." Campus";
    }
    }
    /* metodo con parametros */
 
    
    
/* instanciar clases --> variables de la instancia */
    $camper = new Camper("luck","alo@gmail.com",5465654654);
    $camper->setNombre("HALO");
    $camper->setEmail("halo@gmail.com");
    $camper->setTelefono(1234353);
    echo $camper->getNombre()."<br>",$camper->getEmail()."<br>",$camper->getTelefono()."<br>",$camper->saludo('que tal');    
?>