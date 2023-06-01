<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <!-- Typografia -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap" rel="stylesheet">
    <!-- boostrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <!-- css -->
    <link rel="stylesheet" href="./css/login.css">

</head>
<body>
    <div class="container-m">
        <div class="section1 d-flex flex-column justify-content-center align-items-center">
           
         <div class="d-flex justify-content-center align-items-center">
            <img src="img/supermarkets.png" alt="" class="logo"></div>
            <div class="d-flex justify-content-center align-items-center"><h1 style="font-weight: 800;">BIENVENIDOS</h1></div>
            <div  class="d-flex justify-content-center align-items-center" >
                <form action="modificadores/registros.php" method="post">
                    <div class="mb-3">
                    <label for="campo" class="form-label">Usuario</label>
                        <input 
                          type="text"
                          id="email"
                          name="email"
                          class="form-control"  
                        />
                      <div id="emailHelp" class="form-text">Mañana es una excusa maravillosa, ¿No crees?</div>
                    </div>
                    <div class="mb-3">
                    <label for="campo" class="form-label">Contraseña</label>
                        <input 
                          type="password"
                          id="password"
                          name="password"
                          class="form-control"  
                        />
                    </div>
                 
                    <button type="submit" name="guardar" value="login"  class="btn btn-primary">Iniciar Sesion</button>
                  </form>
                  

            </div>

      
        </div>
        <div class="section2 d-flex flex-column justify-content-center align-items-center" id="section2">
          
                
             <div  class="d-flex justify-content-center align-items-center" >
                
                <form action="modificadores/registros.php" method="post">
                    <h1 class="m-5" style="font-weight: 800;">REGISTRATE</h1>
                    <div class="mb-3">
                        <label for="campo" class="form-label">Usuario</label>
                        <input 
                          type="text"
                          id="user"
                          name="user"
                          class="form-control" 
                          required 
                        />
                      </div>
                    <div class="mb-3">
                    <label for="campo" class="form-label">Email</label>
                        <input 
                          type="text"
                          id="email"
                          name="email"
                          class="form-control" 
                          required 
                        />
                    </div>
                    <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                        <input 
                          type="password"
                          id="password"
                          name="password"
                          class="form-control" 
                          required 
                        />
                    </div>
                    <div class="mb-3">
                    <label for="id USER" class="form-label">ID(dado por la empresa)</label>
                        <input 
                          type="number"
                          id="userid"
                          name="userid"
                          class="form-control"
                          required  
                        />
                    </div>
                    <div class="mb-3">
                    <label for="id USER" class="form-label">KEYUSER(opcional)</label>
                        <input 
                          type="number"
                          id="keytime"
                          name="keytime"
                          class="form-control"
                          value="1"
                          required  
                        />
                    </div>
                    <button type="submit" name="guardar" value="usuario"  class="btn btn-primary">Registrate</button>
                  </form>
              </div>    
        </div>
      </div>

      <!-- Boostrap -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
     
    
</body>
</html>