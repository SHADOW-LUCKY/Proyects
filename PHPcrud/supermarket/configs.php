<?php
require_once("conexion/conexion.php");
class Categorias extends Conectar{
    // variables 
    private $id;
    private $nombre;
    private $descripcion;
    private $imagen;
    protected $dbCnx;
    // constructor
    public function __construct($id=0, $nombre="", $descripcion="", $imagen="",$dbCnx=""){
        $this->id= $id;
        $this->nombre= $nombre;
        $this->descripcion= $descripcion;
        $this->imagen= $imagen;
        parent::__construct($dbCnx);
    }
    // setters
    public function setID($id) {    
        $this->id = $id;
    }
    public function setNombre($nombre) { 
        $this->nombre = $nombre;
    }
    public function setDescripcion($descripcion){
        $this->descripcion = $descripcion;
    }
    public function setImagen($imagen) {    
        $this->imagen = $imagen;
    }
    // getters
    public function getID(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getDescripcion() {
        return $this->descripcion;
    }
    public function getImagen() {
        return $this->imagen;
    }
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO categorias(categoria_nombre,categoria_descripcion,categoria_imagen) VALUES(?,?,?)");
            $stat -> execute([$this->nombre,$this->descripcion,$this->imagen]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM categorias");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM categorias WHERE categoria_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
}
class Proveedores extends Conectar{
    // variables
    private $id;
    private $nombre;
    private $telefono;
    private $ciudad;
    protected $dbCnx;
    // constructor
    public function __construct($id=0, $nombre="", $telefono="", $ciudad="",$dbCnx=""){
        $this->id= $id;
        $this->nombre= $nombre;
        $this->telefono= $telefono;
        $this->ciudad= $ciudad;
       parent::__construct($dbCnx);
    }
    // setters
    public function setID($id){
        $this->id=$id;
    }
    public function setNombre($nombre){
        $this->nombre= $nombre;
    }
    public function setTelefono($telefono){
        $this->telefono=$telefono;
    }
    public function setCiudad($ciudad) {
        $this->ciudad=$ciudad;
    }
    // getters
    public function getID(){
        return $this->id;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getTelefono(){
        return $this->telefono;
    }
    public function getCiudad(){
        return $this->ciudad;
    }
    // metodos
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO proveedores(proveedor_nombre,proveedor_telefono,proveedor_ciudad) VALUES(?,?,?)");
            $stat -> execute([$this->nombre,$this->telefono,$this->ciudad]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM proveedores");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM proveedores WHERE proveedor_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
}
class Clientes extends Conectar{
    // variables
    private$id;
    private$telefono;
    private$company;
    protected $dbCnx;
    // constructor
    public function __construct($id=0,$telefono="",$company="",$dbCnx=""){
        $this->id=$id;
        $this->telefono=$telefono;
        $this->company=$company;
       parent::__construct($dbCnx);
    }
    // setters
    public function setID($id){
        $this->id=$id;
    }
    public function setCompany($company){
        $this->company= $company;
    }
    public function setTelefono($telefono){
        $this->telefono=$telefono;
    }
    // getters
    public function getID(){
        $this->id;
    }
    public function getCompany(){
        $this->company;
    }
    public function getTelefono(){
        $this->telefono;
    }
    // metodos
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO clientes(cliente_celular,cliente_company) VALUES(?,?)");
            $stat -> execute([$this->telefono,$this->company]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM clientes");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM clientes WHERE cliente_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
}
class Empleados extends Conectar{
    private $id;
    private $nombre;
    private $celular;
    private $direccion;
    private $imagen;
    protected $dbCnx;

    public function __construct($id =0, $nombre = "", $celular = "", $direccion ="",$imagen ="",$dbCnx=""){
        $this->id=$id; 
        $this->nombre=$nombre; 
        $this->celular=$celular; 
        $this->direccion=$direccion; 
        $this->imagen=$imagen; 
       parent::__construct($dbCnx);
    }
    #getters
    public function getId(){
        return $this->id;
    }
    public function getImagen(){
        return $this->imagen;
    }
    public function getNombre(){
        return $this->nombre;
    }
    public function getCelular(){
        return $this->celular;
    }
    public function getDireccion(){
        return $this->direccion;
    }
    #setters
    public function setId($id){
        $this->id=$id;
    }
   
    public function setNombre($nombre){
        $this->nombre=$nombre;
    }
    
    public function setCelular($celular){
        $this->celular=$celular;
    }
   
    public function setDireccion($direccion){
        $this->direccion=$direccion;
    }
  
    public function setImagen($imagen){
        $this->imagen=$imagen;
    }
    #metodos
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO empleados(empleado_nombre,empleado_celular,empleado_direccion,empleado_imagen) VALUES(?,?,?,?)");
            $stat -> execute([$this->nombre,$this->celular,$this->direccion,$this->imagen]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM empleados");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stm = $this->dbCnx->prepare("DELETE FROM empleados WHERE empleado_ID=?");
          $stm->execute([$this->id]);
          return $stm -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
  
}
class Productos extends Conectar{
    #variables
    private $id;
    private $nombre;
    private $categoria;
    private $proveedor;
    private $precioUnit;
    private $stock;
    private $unitsPedidas;
    private $descontinuado;
    protected $dbCnx;
    #constructor
    public function __construct($id=0, $nombre="", $categoria=0, $proveedor=0, $precioUnit=0, $stock=0, $unitsPedidas=0, $descontinuado="",$dbCnx=""){
        $this->id=$id;
        $this->nombre=$nombre;
        $this->categoria=$categoria;
        $this->proveedor=$proveedor;
        $this->precioUnit=$precioUnit;
        $this->stock=$stock;
        $this->unitsPedidas=$unitsPedidas;
        $this->descontinuado =$descontinuado;
       parent::__construct($dbCnx);
    }
    #setter for variables
    public function setID($id){
        $this->id=$id;
    }
    public function setNombre($nombre) {
        $this->nombre=$nombre;
    }
    public function setCategoria($categoria) {
        $this->categoria=$categoria;
    }
    public function setProveedor($proveedor) {
        $this->proveedor=$proveedor;
    }
    public function setPreciounit($precioUnit){
        $this->precioUnit=$precioUnit;
    }
    public function setStock($stock) {
        $this->stock=$stock;
    }
    public function setUnitspedidas($unitsPedidas) {
        $this->unitsPedidas=$unitsPedidas;
    }
    public function setDescontinuado($descontinuado){
        $this->descontinuado=$descontinuado;
    }
    #getter for variables
    public function getID(){
         return $this->id;
    }
    public function getNombre() {
        return $this->nombre;
    }
    public function getCategoria() {
        return $this->categoria;
    }
    public function getProveedor() {
        return $this->proveedor;
    }
    public function getPreciounit(){
        return $this->precioUnit;
    }
    public function getStock() {
        return $this->stock;
    }
    public function getUnitspedidas() {
        return $this->unitsPedidas;
    }
    public function getDescontinuado(){
        return $this->descontinuado;
    }
    #metodos
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO productos(categoria_ID,proveedor_ID,precioUnit,stock,unidades_pedidas,nombre_producto,descontinuado) VALUES(?,?,?,?,?,?,?)");
            $stat -> execute([$this->categoria, $this->proveedor,$this->precioUnit,$this->stock,$this->unitsPedidas,$this->nombre,$this->descontinuado]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM productos");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stat = $this->dbCnx->prepare("DELETE FROM productos WHERE producto_ID=?");
          $stat->execute([$this->id]);
          return $stat -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
    /* nombre categorias y proveedores */
    public function nameCate($categoria){
        try {
            $stat = $this->dbCnx->prepare("SELECT categorias.categoria_nombre FROM categorias INNER JOIN productos ON categorias.categoria_ID = productos.categoria_ID  WHERE categorias.categoria_ID = ?");
            $stat->execute([$categoria]);
            return $stat->fetchColumn();
              //   para saber como esta la pagina ahora
          } catch (Exception $e) {
              return $e -> getMessage();
          } 

    }
    public function nameProv($proveedor){
        try {
            $stat = $this->dbCnx->prepare("SELECT proveedores.proveedor_nombre FROM proveedores INNER JOIN productos ON proveedores.proveedor_ID = productos.proveedor_ID WHERE proveedores.proveedor_ID = ?");
            $stat->execute([$proveedor]);
            return $stat->fetchColumn();
              //   para saber como esta la pagina ahora
          } catch (Exception $e) {
              return $e -> getMessage();
          } 
    }
}
class Venta extends Conectar{   
    /* variable */
    private$id;
    private$fecha;
    private$empleado;
    private$cliente;
    private$idfac;
    private$factura;
    private$procvendido;
    private$cantidad;
    private$precio;
    protected $dbCnx;
    /* constructor */
    public function __construct($id=0,$fecha="",$empleado="",$cliente="",$idfac=0 , $factura=0,$procvendido="",$cantidad=0,$precio=0,$dbCnx=""){
        $this->id=$id;
        $this->fecha=$fecha;
        $this->empleado=$empleado;
        $this->cliente=$cliente;
        $this->idfac=$idfac;
        $this->factura=$factura;
        $this->procvendido=$procvendido;
        $this->cantidad=$cantidad;
        $this->precio=$precio;
       parent::__construct($dbCnx);
    }
    /* setters */
    public function setID($id){
     $this->id=$id;
    }
    public function setFecha($fecha){
     $this->fecha=$fecha;
    }
    public function setEmpleado($empleado){
     $this->empleado=$empleado;
    }
    public function setCliente($cliente){
     $this->cliente=$cliente;
    }
    /* setters factura */
    public function setIDfac($idfac){
        $this->id=$id;
       }
       public function setFactura($factura){
        $this->factura=$factura;
       }
       public function setProcvendido($procvendido){
        $this->procvendido=$procvendido;
       }
       public function setCantidad($cantidad){
        $this->cantidad=$cantidad;
       }
       public function setPrecio($precio){
        $this->precio=$precio;
       }
    /* getters */
    public function getID(){
        return $this->id;
    }
    public function getFecha(){
        return $this->fecha;
    }
    public function getEmpleado(){
        return $this->empleado;
    }
    public function getCliente(){
        return $this->cliente;
    }
    /* getters factura */
    public function getIDfac(){
        return $this->idfac;
       }
       public function getFactura(){
        return $this->factura;
       }
       public function getProcvendido(){
        return $this->procvendido;
       }
       public function getCantidad(){
        return $this->cantidad;
       }
       public function getPrecio(){
        return $this->precio;
       }
    /* metodos */
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO facturas(empleado_ID,cliente_ID,fecha) VALUES(?,?,?)");
            $stat -> execute([$this->empleado,$this->cliente,$this->fecha]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM facturas");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stat = $this->dbCnx->prepare("DELETE FROM facturas WHERE factura_ID=?");
          $stat->execute([$this->id]);
          return $stat -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
    /* metodos inner join */
    public function nameEmp($empleado){
        try {
            $stat = $this->dbCnx->prepare("SELECT empleados.empleado_nombre FROM empleados INNER JOIN facturas ON empleados.empleado_ID = facturas.empleado_ID  WHERE empleados.empleado_ID = ?");
            $stat->execute([$empleado]);
            return $stat->fetchColumn();
              //   para saber como esta la pagina ahora
          } catch (Exception $e) {
              return $e -> getMessage();
          } 

    }
    public function nameCli($cliente){
        try {
            $stat = $this->dbCnx->prepare("SELECT clientes.cliente_company FROM clientes INNER JOIN facturas ON clientes.cliente_ID = facturas.cliente_ID  WHERE clientes.cliente_ID = ?");
            $stat->execute([$cliente]);
            return $stat->fetchColumn();
              //   para saber como esta la pagina ahora
          } catch (Exception $e) {
              return $e -> getMessage();
          } 

    }
    /* metodos factura */
    public function getLastID(){
        $stat = $this->dbCnx->prepare("SELECT MAX(factura_ID) FROM facturas;");
        $stat->execute();
        return $stat->fetchColumn();
    }
    public function insertDatafac(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO facturaDetalle(factura_ID,producto_vendido,cantidad,precio) VALUES(?,?,?,?)");
            $stat -> execute([$this->factura,$this->procvendido,$this->cantidad,$this->precio]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function selectAllfac() {
        try {
            $stat = $this->dbCnx->prepare("SELECT * FROM facturaDetalle");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function deleteSelfac(){
        try {
          $stat = $this->dbCnx->prepare("DELETE FROM facturaDetalle WHERE factura_ID=?");
          $stat->execute([$this->factura]);
          return $stat -> fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
}
class Registro extends Conectar{
    private $id;
    private $nombre;
    private $email;
    private $password;
    private $empleado;
    private $role;
    protected $dbCnx;
    /* CONSTRUCTOR */
    public function __construct($id=0, $nombre="", $email="", $password="", $empleado=0, $role=0, $dbCnx=""){
        $this->id=$id;            
        $this->nombre=$nombre;        
        $this->email=$email;        
        $this->password=$password;        
        $this->empleado=$empleado;        
        $this->role=$role;   
        parent::__construct($dbCnx);         
    }
    /* setters */
    public function setID($id) {
        $this->id=$id;
    }
    public function setNombre($nombre) {
        $this->nombre=$nombre;
    }
    public function setEmail($email){
        $this->email=$email;
    }
    public function setEmpleado($empleado){
        $this->empleado=$empleado;
    }
    public function setPassword($password){
        $this->password=$password;
    }
    public function setRole($role){
        $this->role=$role;
    }
    /* getters */
    public function getID() {
        return $this->id;
    }
    public function getNombre() {
        return $this->nombre;
    }
    public function getEmail(){
        return $this->email;
    }
    public function getEmpleado(){
       return $this->empleado;
    }
    public function getPassword(){
        return $this->password;
    }
    public function getRole(){
        return $this->role;
    }
    /* insert data */
    public function insertData(){
        try {
            $stat = $this->dbCnx->prepare("INSERT INTO users(user_nombre,user_email,user_password,user_empleado,user_role) VALUES(?,?,?,?,?)");
            $stat -> execute([$this->nombre,$this->email,md5($this->password),$this->empleado,$this->role]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
    public function checkList($email){
        $stat = $this->dbCnx->prepare("SELECT * FROM users WHERE email = '$email'");
        if ($stat->fetchColumn()) {
            return true;
        } else {
            return false;
        }
        
    }
    public function selectAll() {
        try {
            $stat=$this->dbCnx->prepare("SELECT * FROM users");
            $stat->execute();
            return $stat->fetchAll();
        } catch (Exception $e) {
            $e->getMessage();
        } 
    }
    public function deleteSel(){
        try {
          $stat = $this->dbCnx->prepare("DELETE FROM users WHERE user_ID=?");
          $stat->execute([$this->id]);
          return $stat -> fetchAll();
            //   para saber como esta la pagina ahora
        } catch (Exception $e) {
            return $e -> getMessage();
        } 
    }
}
class Login extends Conectar{
    private $id;
    private $email;
    private $password;    
    /* constructor */
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
        $stat=$this->dbCnx->prepare("SELECT * FROM users WHERE user_email=? AND user_password=?",);
        $stat->execute([$this->email,md5($this->password)]);
        $user = $stat->fetchAll();/* saca los parecidos */
        print_r($user);
        if(count($user)>0){
            session_start();
            $_SESSION['id'] = $user[0]['user_ID'];
            $_SESSION['username'] = $user[0]['user_nombre'];
            $_SESSION['email'] = $user[0]['user_email'];
            $_SESSION['password'] = $user[0]['user_password'];
            $_SESSION['role'] = $user[0]['user_role'];
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
