<?php
abstract class Persona {
    protected $nombre;    
    protected $edad;
    protected $genero;
    protected $estado;
    protected $birth;
    public function __construct($nombre, $edad, $genero, $estado, $birth){
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->genero = $genero;
        $this->estado = $estado;
        $this->birth = $birth;
    }
}
class Niño extends Persona{
    protected $tieneFamilia;
    protected $tieneHermanos;
    protected $grado;
    public function __construct($tieneFamilia,$tieneHermanos,$grado){
        parent::__construct($nombre, $edad, $genero, $estado, $birth);
        $this -> tieneFamilia = $tieneFamilia;
        $this -> tieneHermanos = $tieneHermanos;
        $this -> grado = $grado;
    }
}
class Adulto extends Persona{
    protected $salario;
    protected $independiente;
    protected $trabajo;    
    public function __construct($salario, $independiente, $trabajo){
        parent::__construct($nombre, $edad, $genero, $estado, $birth);
        $this->salario = $salario; 
        $this->independiente = $independiente;
        $this->trabajo = $trabajo;
    }
}
class Anciano extends Persona{
    protected $conPension;
    protected $ancianato;
    protected $seguroVida;
    public function __construct($conPension, $ancianato, $seguroVida){
        parent::__construct($nombre, $edad, $genero, $estado, $birth);
        $this ->conPension= $conPension                 
        $this ->ancianato= $ancianato             
        $this ->seguroVida= $seguroVida                 
    }
}
?>
