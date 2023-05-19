<?php
abstract class Base{
    /* base del pokemon */
    protected $nombre;     
    protected $tipo; 
    protected $jerar; 
    protected $region; 
    protected $nivel; 
    
    public function __construct($nombre, $tipo, $jerar, $region, $nivel){
        $this->nombre = $nombre;
        $this->tipo = $tipo;
        $this->jerar = $jerar;
        $this->region = $region;
        $this->nivel = $nivel;
    }
}

class pokemon1/* Eevee  */extends Base{
    /* base del pokemon */
    protected $objeto;
    protected $numevoluciones;

    public function __construct($nombre, $tipo, $jerar, $region, $nivel, $objeto){
        parent::__construct($nombre, $tipo, $jerar, $region, $nivel);
        $this->objeto = $objeto;
        $this->numevoluciones = $numevoluciones;
    }
}
class pokemon2/* Pikachu  */extends Base{
    /* base del pokemon */
    protected $objeto;
    protected $movimientoZ;
    public function __construct($nombre, $tipo, $jerar, $region, $nivel, $objeto){
        parent::__construct($nombre, $tipo, $jerar, $region, $nivel);
        $this->objeto = $objeto;
        $this->movimientoZ = $movimientoZ;
    }
}
class pokemon3/* Garchomp */ extends Base{
    /* base del pokemon */
    protected $objeto;
    protected $entrenador;
    public function __construct($nombre, $tipo, $jerar, $region, $nivel, $objeto){
        parent::__construct($nombre, $tipo, $jerar, $region, $nivel);
        $this->objeto = $objeto;
        $this->entrenador = $entrenador;
    }
}
class pokemon4/* Rattata  */extends Base{
    /* base del pokemon */
    protected $objeto;
    protected $ubicacion;
    public function __construct($nombre, $tipo, $jerar, $region, $nivel, $objeto){
        parent::__construct($nombre, $tipo, $jerar, $region, $nivel);
        $this->objeto = $objeto;
        $this->ubicacion = $ubicacion;
    }
} 
?>

