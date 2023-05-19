<?php
/* producto */
class Producto  {
    /* atributos */
    private $id;
    private $nombre;
    private $tipo;
    private $paisOrigen;
    private $precio;
    private $tieneIva;
    private $tamaño;
    /* constructor */
    public function __construct($id,$nombre,$tipo, $paisOrigen, $precio, $tieneIva,$tamaño) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->tipo = $tipo;
        $this->paisOrigen = $paisOrigen;
        $this->precio = $precio;
        $this->tieneIva = $tieneIva;
        $this->tamaño = $tamaño;
    }
     /* Getters */
     public function getId() {
        return $this->id;
    }
    public function getNombre() {
        return $this->nombre;
    }
    public function getTipo() {
        return $this->tipo;
    }
    public function getPaisOrigen() {
        return $this->paisOrigen;
    }
    public function getPrecio() {
        return $this->precio;
    }
    public function getTieneIva() {
        return $this->tieneIva;
    }
    public function getTamaño() {
        return $this->tamaño;
    }
    /* Setters */
    public function setId($id) {
        return $this->id = $id;
    }
    public function setNombre($nombre) {
        return $this->nombre = $nombre;
    }
    public function setTipo($tipo) {
        return $this->tipo = $tipo;
    }
    public function setPaisOrigen($paisOrigen) {
        return $this->paisOrigen = $paisOrigen;
    }
    public function setPrecio($precio) {
        return $this->precio = $precio;
    }
    public function setTieneIva($tieneIva) {
        return $this->tieneIva = $tieneIva;
    }
    public function setTamaño($tamaño) {
        return $this->tamaño = $tamaño;
    }
   
}
/* nuevos productos */
    $product1 = new Producto(1,"jabon","limpieza","alemania",2000,true,"pequeño");
     $product2  = new Producto(2,"locker","estudio","colombia",50000,false  ,"grande"); 
    echo"id:". $product1->getId()."<br>";
    echo"nombre:". $product1->getNombre()."<br>";
    echo"tipo:". $product1->getTipo()."<br>";
    echo"paisOrigen:". $product1->getPaisOrigen()."<br>";
    echo"precio:". $product1->getPrecio()."<br>";
    echo"tieneIva:". $product1->getTieneIva()."<br>";
    echo"tamaño:". $product1->getTamaño()."<br><br>";

    echo "id:". $product2->getId()."<br>";
    echo "nombre:". $product2->getNombre()."<br>";
    echo "tipo:". $product2->getTipo()."<br>";
    echo "paisOrigen:". $product2->getPaisOrigen()."<br>";
    echo "precio:". $product2->getPrecio()."<br>";
    echo "tieneIva:". $product2->getTieneIva()."<br>";
    echo "tamaño:". $product2->getTamaño()."<br>";  
?>