<?php
class Personas{
    private $persona_ID;    
    private $nombre;
    private $telefono;
    private $direccion;    
    protected $dbCnx;
    
    public function __construct($persona_ID="",$nombre="",$telefono="",$direccion=""){
        $this->persona_ID = $persona_ID;
        $this->nombre = $nombre;
        $this->telefono = $telefono;
        $this->direccion = $direccion;
    }

    /* Getters */
    public function getPersona_ID(){
        return $this->persona_ID;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getTelefono(){
        return $this->telefono;
    }
    public function getDireccion(){
        return $this->direccion;
    }
    /* Setters */
    public function setPersona_ID($persona_ID){
        $this->persona_ID = $persona_ID;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
    public function setTelefono($telefono){
        $this->telefono = $telefono;
    }
    public function setDireccion($direccion){
        $this->direccion = $direccion;
    }

   
}
class Constructora{
    private $constructora_ID;    
    private $nombre;
    private $direccion;    
    protected $dbCnx;
    
    public function __construct($constructora_ID="",$nombre="",$direccion=""){
        $this->constructora_ID = $constructora_ID;
        $this->nombre = $nombre;
        $this->direccion = $direccion;
    }
    /* Getters */
    public function getConstructora_ID(){
        return $this->constructora_ID;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getDireccion(){
        return $this->direccion;
    }
    /* Setters */
    public function setConstructora_ID($constructora_ID){
        $this->constructora_ID = $constructora_ID;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
    public function setDireccion($direccion){
        $this->direccion = $direccion;
    }
}
class Productos{
    private $producto_ID;    
    private $nombre;
    protected $dbCnx;
    
    public function __construct($producto_ID="",$nombre="",$precio=""){
        $this->producto_ID = $producto_ID;
        $this->nombre = $nombre;
    }
    /* Getters */
    public function getProducto_ID(){
        return $this->producto_ID;
    }
    public function getNombre(){
        return $this->nombre;
    }
    /* Setters */
    public function setProducto_ID($producto_ID){
        $this->producto_ID = $producto_ID;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
}
class Clientes{
    private $cliente_ID;    
    private $nombre;
    protected $dbCnx;
    
    public function __construct($cliente_ID="",$nombre=""){
        $this->cliente_ID = $cliente_ID;
        $this->nombre = $nombre;
    }
    /* Getters */
    public function getCliente_ID(){
        return $this->cliente_ID;
    }
    public function getNombre(){
        return $this->nombre;
    }
    /* Setters */
    public function setCliente_ID($cliente_ID){
        $this->cliente_ID = $cliente_ID;
    }
    public function setNombre($nombre){
        $this->nombre = $nombre;
    }
}
class Empleados{
    private $empleado_ID;    
    private $identificacion;
    private $usuario;
    private $password;
    protected $dbCnx;
    public function __construct($empleado_ID="",$identificacion="",$usuario="",$password=""){
        $this->empleado_ID = $empleado_ID;
        $this->identificacion = $identificacion;
        $this->usuario = $usuario;
        $this->password = $password;   
    }
    /* Getters */
    public function getEmpleado_ID(){
        return $this->empleado_ID;
    }
    public function getIdentificacion(){
        return $this->identificacion;
    }
    public function getUsuario(){
        return $this->usuario;
    }
    public function getPassword(){
        return $this->password;
    }
    /* Setters */
    public function setEmpleado_ID($empleado_ID){
        $this->empleado_ID = $empleado_ID;
    }
    public function setIdentificacion($identificacion){
        $this->identificacion = $identificacion;
    }
    public function setUsuario($usuario){
        $this->usuario = $usuario;
    }
    public function setPassword($password){
        $this->password = $password;
    }
}
class Cotzaciones{
    private $cotizacion_ID;
    private $cliente_ID;
    private $empleado_ID;
    private $duracion_alquiler;
    private $precio_total;
    private $fecha;   
    protected $dbCnx;
    public function __construct($cotizacion_ID="",$cliente_ID="",$empleado_ID="",$duracion_alquiler="",$precio_total="",$fecha=""){
        $this->cotizacion_ID = $cotizacion_ID;
        $this->cliente_ID = $cliente_ID;
        $this->empleado_ID = $empleado_ID;
        $this->duracion_alquiler = $duracion_alquiler;
        $this->precio_total = $precio_total;
        $this->fecha = $fecha;
    } 
    /* Getters */
    public function getCotizacion_ID(){
        return $this->cotizacion_ID;
    }
    public function getCliente_ID(){
        return $this->cliente_ID;
    }
    public function getEmpleado_ID(){
        return $this->empleado_ID;
    }
    public function getDuracion_alquiler(){
        return $this->duracion_alquiler;
    }
    public function getPrecio_total(){
        return $this->precio_total;
    }
    public function getFecha(){
        return $this->fecha;
    }
    /* Setters */
    public function setCotizacion_ID($cotizacion_ID){
        $this->cotizacion_ID = $cotizacion_ID;
    }
    public function setCliente_ID($cliente_ID){
        $this->cliente_ID = $cliente_ID;
    }
    public function setEmpleado_ID($empleado_ID){
        $this->empleado_ID = $empleado_ID;
    }
    public function setDuracion_alquiler($duracion_alquiler){
        $this->duracion_alquiler = $duracion_alquiler;
    }
    public function setPrecio_total($precio_total){
        $this->precio_total = $precio_total;
    }
    public function setFecha($fecha){
        $this->fecha = $fecha;
    }
}
class detalleCotizacion{
 
    private $cotizacion_producto_ID;     
    private $cotizacion_ID; 
    private $producto_ID; 
    protected $dbCnx;
    public function __construct($cotizacion_producto_ID="",$cotizacion_ID="",$producto_ID=""){
        $this->cotizacion_producto_ID = $cotizacion_producto_ID;
        $this->cotizacion_ID = $cotizacion_ID;
        $this->producto_ID = $producto_ID;
    }
    /* Getters */
    public function getCotizacion_producto_ID(){
        return $this->cotizacion_producto_ID;
    }
    public function getCotizacion_ID(){
        return $this->cotizacion_ID;
    }
    public function getProducto_ID(){
        return $this->producto_ID;
    }
    /* Setters */
    public function setCotizacion_producto_ID($cotizacion_producto_ID){
        $this->cotizacion_producto_ID = $cotizacion_producto_ID;
    }
    public function setCotizacion_ID($cotizacion_ID){
        $this->cotizacion_ID = $cotizacion_ID;
    }
    public function setProducto_ID($producto_ID){
        $this->producto_ID = $producto_ID;
    }


}

?>