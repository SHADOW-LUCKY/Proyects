<?php
session_start();
if (!$_SESSION['id']) {
ini_set("display_errors", 1);

ini_set("display_startup_errors", 1);

error_reporting(E_ALL);
require_once("configs.php");
$data = new Categorias();/* creamos nueva clase de config */
$allData = $data->selectAll();
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página </title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">


  <link rel="stylesheet" type="text/css" href="css/estudiantes.css">

</head>

<body>
  <div class="contenedor">

    <div class="parte-izquierda">

      <div class="perfil">
        <h3 style="margin-bottom: 2rem;">Camper Skills.</h3>
        <h3>LUCKY</h3>
      </div>
      <div class="menus">
        <a href="Home/home.php" style="display: flex;gap:2px;">
          <i class="bi bi-house-door"> </i>
          <h3 style="margin: 0px;font-weight: 800;">Home</h3>
        </a>
        <a href="categorias.php" style="display: flex;gap:2px;">
          <i class="bi bi-house-door"> </i>
          <h3 style="">Categorias</h3>
        </a>
        <a href="proveedores.php" style="display: flex;gap:1px;">
          <i class="bi bi-people"></i>
          <h3 style="font-weight: 800;">Proveedores</h3>
        </a>
        <a href="empleados.php" style="display: flex;gap:1px;">
          <i class="bi bi-people"></i>
          <h3 style="font-weight: 800;">Empleados</h3>
        </a>
        <a href="clientes.php" style="display: flex;gap:1px;">
          <i class="bi bi-people"></i>
          <h3 style="font-weight: 800;">Clientes</h3>
        </a>
        <a href="productos.php" style="display: flex;gap:1px;">
          <i class="bi bi-people"></i>
          <h3 style="font-weight: 800;">Productos</h3>
        </a>
        <a href="facturas.php" style="display: flex;gap:1px;">
          <i class="bi bi-people"></i>
          <h3 style="font-weight: 800;">Facturas</h3>
        </a>
        <form action="modificadores/registros.php" method="post">
          <button type="submit" class="btn btn-outline-dark col-12" name="guardar" value="salir">Log Out</button>
        </form>
      </div>
    </div>

    <div class="parte-media">
      <div style="display: flex; justify-content: space-between;">
        <h2>Categorias</h2>
        <button class="btn-m" data-bs-toggle="modal" data-bs-target="#registrarEstudiantes"><i class="bi bi-person-add " style="color: rgb(255, 255, 255);" ></i></button>
      </div>
      <div class="menuTabla contenedor2">
        <table class="table table-custom ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NOMBREs</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Imagen</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>
          <tbody class="" id="tabla">
            <!-- ///////Llenado DInamico desde la Base de Datos -->
            <?php
              foreach($allData as $key => $val){
            ?>
            <tr>
              <td><?php echo $val['categoria_ID']?></td><!-- toca referirse a las filas -->
              <td><?php echo $val['categoria_nombre']?></td>
              <td><?php echo $val['categoria_descripcion']?></td>
              <td><img src="<?php echo $val['categoria_imagen']?>" alt="..." height="30px" width="auto"></td>
              
              <td><a class="btn btn-danger" href="modificadores/borrados.php?id=<?=$val['categoria_ID']?>&req=deletecate">Borrar</a></td>
            </tr>
            <?php } ?>
          </tbody>
        
        </table>

      </div>


    </div>

    <div class="parte-derecho " id="detalles">
      <h3>Detalle Estudiantes</h3>
      <p>Cargando...</p>
       <!-- ///////Generando la grafica -->

    </div>





    <!-- /////////Modal de registro de nuevo estuiante //////////-->
    <div class="modal fade" id="registrarEstudiantes" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="backdrop-filter: blur(5px)">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" >
        <div class="modal-content" >
          <div class="modal-header" >
            <h1 class="modal-title fs-5" id="exampleModalLabel">Nueva categoria</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" style="background-color: rgb(231, 253, 246);">
            <form class="col d-flex flex-wrap" method="post" action="modificadores/registros.php">
              <div class="mb-1 col-12">
                <label for="nombres" class="form-label">Nombre</label>
                <input 
                  type="text"
                  id="nombre"
                  name="nombre"
                  class="form-control"  
                />
              </div>

              <div class="mb-1 col-12">
                <label for="Descripcion" class="form-label">Descripcion</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  class="form-control"  
                  cols="30" 
                  rows="10"></textarea>
              </div>

              <div class="mb-1 col-12">
                <label for="logros" class="form-label">Imagen(url)</label>
                <input 
                  type="text"
                  id="url"
                  name="url"
                  class="form-control"  
                />
              </div>

              <div class=" col-12 m-2">
                <button type="submit" class="btn btn-primary" value="categorias" name="guardar">Agregar Categoria</button>
              </div>
            </form>  
         </div>       
        </div>
      </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"></script>


</body>

</html>
<?php

} else {
  echo"<script>alert('sesion cerrada');document.location='../loginRegister.php';</script>";
}

?>