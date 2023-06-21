const http = require('http');/* sacamos la libreria http */


/* function requestListener(req,res) creamos la funcion requestListener  {
    //puede ser anonima
} */
/* creacion del servidor web */
/* normalmente es un arrow function */
const server = http.createServer((req,res)=>{
   /* console.log(req.url,req.method,req.headers);(pasa al console log) */
   //empezamos a enviar respuestas al client
   const url = req.url
   const boost=`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>`
   let title;
   let content;
   switch (url) {
    case"/":
        title = "Home"
        content = `
        <h2>Ventas de Artemis</h2>
  
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto A</td>
              <td>5</td>
              <td>$10.00</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>Producto B</td>
              <td>2</td>
              <td>$15.00</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Producto C</td>
              <td>3</td>
              <td>$12.00</td>
              <td>$36.00</td>
            </tr>
            <tr>
              <td>Producto D</td>
              <td>1</td>
              <td>$20.00</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Producto E</td>
              <td>4</td>
              <td>$8.00</td>
              <td>$32.00</td>
            </tr>
            <tr>
              <td>Producto F</td>
              <td>2</td>
              <td>$18.00</td>
              <td>$36.00</td>
            </tr>
            <tr>
              <td>Producto G</td>
              <td>3</td>
              <td>$14.00</td>
              <td>$42.00</td>
            </tr>
            <tr>
              <td>Producto H</td>
              <td>1</td>
              <td>$25.00</td>
              <td>$25.00</td>
            </tr>
            <tr>
              <td>Producto I</td>
              <td>2</td>
              <td>$11.00</td>
              <td>$22.00</td>
            </tr>
            <tr>
              <td>Producto J</td>
              <td>4</td>
              <td>$9.00</td>
              <td>$36.00</td>
            </tr>
          </tbody>
        </table>`
        break;     
    case "/users":
        title="users"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a> <table class="table">
        <thead>
            <th scope="col">Nombre</th>
            <th scope="col">telefono</th>
            <th scope="col">email</th>
        </thead>
        <tbody>
            <tr>
              <td>John Doe</td>
              <td>1234567890</td>
              <td>johndoe@example.com</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>0987654321</td>
              <td>janesmith@example.com</td>
            </tr>
            <tr>
              <td>Robert Johnson</td>
              <td>5555555555</td>
              <td>robertjohnson@example.com</td>
            </tr>
            <tr>
              <td>Emily Davis</td>
              <td>9876543210</td>
              <td>emilydavis@example.com</td>
            </tr>
            <tr>
              <td>Michael Wilson</td>
              <td>7777777777</td>
              <td>michaelwilson@example.com</td>
            </tr>
            <tr>
              <td>Sarah Anderson</td>
              <td>3333333333</td>
              <td>sarahanderson@example.com</td>
            </tr>
            <tr>
              <td>David Thompson</td>
              <td>4567890123</td>
              <td>davidthompson@example.com</td>
            </tr>
            <tr>
              <td>Amy Harris</td>
              <td>8765432109</td>
              <td>amyharris@example.com</td>
            </tr>
            <tr>
              <td>Christopher Walker</td>
              <td>2222222222</td>
              <td>christopherwalker@example.com</td>
            </tr>
            <tr>
              <td>Olivia Martin</td>
              <td>4444444444</td>
              <td>oliviamartin@example.com</td>
            </tr>
          </tbody>
    </table>`        
        break; 
    case "/categories":
        title="categories"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a>  <h2>Categorías</h2>
  
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Categoría</th>
              <th scope="col">Descripción</th>
              <th scope="col">Número de Productos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Categoría A</td>
              <td>Descripción de la categoría A</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Categoría B</td>
              <td>Descripción de la categoría B</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Categoría C</td>
              <td>Descripción de la categoría C</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Categoría D</td>
              <td>Descripción de la categoría D</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Categoría E</td>
              <td>Descripción de la categoría E</td>
              <td>6</td>
            </tr>
          </tbody>`
        break; 
    case "/products":
        title="products"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a>
        <h2>Productos</h2>
  
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto A</td>
              <td>Descripción del Producto A</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Producto B</td>
              <td>Descripción del Producto B</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Producto C</td>
              <td>Descripción del Producto C</td>
              <td>$12.50</td>
            </tr>
            <tr>
              <td>Producto D</td>
              <td>Descripción del Producto D</td>
              <td>$8.99</td>
            </tr>
            <tr>
              <td>Producto E</td>
              <td>Descripción del Producto E</td>
              <td>$20.00</td>
            </tr>
          </tbody>
        </table>`
        break; 
    case "/employees":
        title="employees"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a>
        <h2>Empleados</h2>
  
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Correo Electrónico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Empleado 1</td>
        <td>1234567890</td>
        <td>empleado1@example.com</td>
      </tr>
      <tr>
        <td>Empleado 2</td>
        <td>9876543210</td>
        <td>empleado2@example.com</td>
      </tr>
      <tr>
        <td>Empleado 3</td>
        <td>4567890123</td>
        <td>empleado3@example.com</td>
      </tr>
      <tr>
        <td>Empleado 4</td>
        <td>7890123456</td>
        <td>empleado4@example.com</td>
      </tr>
      <tr>
        <td>Empleado 5</td>
        <td>3210987654</td>
        <td>empleado5@example.com</td>
      </tr>
    </tbody>
  </table>`
        break; 
    case "/customers":
        title="customers"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a> 
        <h1>nuevo cliente</h1>
        <form action="alo.php" method="post">
        <label for="name">nombre</label>
        <input type="text" name="name">
        <label for="email">email</label>
        <input type="email" name="email">
        <label for="telefono">telefono</label>
        <input type="number" name="telefono">
        <input type="submit" value="enviar">
      </form>`
        break; 
    case "/sales":
        title="sales"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a>
        
        <h2>Ventas</h2>
  
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto 1</td>
              <td>2</td>
              <td>$10.00</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Producto 2</td>
              <td>1</td>
              <td>$15.00</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Producto 3</td>
              <td>3</td>
              <td>$8.50</td>
              <td>$25.50</td>
            </tr>
            <tr>
              <td>Producto 4</td>
              <td>2</td>
              <td>$12.00</td>
              <td>$24.00</td>
            </tr>
            <tr>
              <td>Producto 5</td>
              <td>1</td>
              <td>$18.75</td>
              <td>$18.75</td>
            </tr>
            <tr class="total">
              <td colspan="3" align="right">Total:</td>
              <td>$103.25</td>
            </tr>
          </tbody>
        </table>`
        break; 
    case "/shopping":
        title="shopping"
        content=`
         
        <a class="btn btn-dark" href="/users">users</a>
        <a class="btn btn-dark" href="/categories">categories</a>
        <a class="btn btn-dark" href="/products">products</a>
        <a class="btn btn-dark" href="/employees">employees</a>
        <a class="btn btn-dark" href="/customers">customers</a>
        <a class="btn btn-dark" href="/sales">sales</a>
        <a class="btn btn-dark" href="/shopping">shopping</a>
        <h1>PENSASTE QUE ERA SHOPPING PERO ERA YO!!!</h1>
    <img src="https://repository-images.githubusercontent.com/367934588/4a27ae00-b73b-11eb-801b-36dd1756dc93" alt="...">
        
        `
        break;     
    default:
        break;
   }
   
   res.setHeader('Content-Type', 'text/html');/* explicar que estamos enviando html */
   res.write(`<html>`);
   /* head */
   res.write(`<head>`);
   res.write(`<meta charset="UTF-8">`);
   res.write(`<title>${title}</title>`);
   res.write(`${boost}`);
   res.write(`</head>`);
   /* body */
   res.write(`<body>`);
   res.write(`${content}`);
   res.write(`</body>`);
   res.write(`</html>`);
   
});/* si no se le pone los parentesis es qu espera a que se ejecute,NO la ejecuta el codigo (aplica si la funcion no es anonima)*/
server.listen(7000);/* prepara al servidor web para funcionar y recibir solicitudes */
/* req.url (donde esta ubicado actualmente)*/
/* req.method  (metodo que usa para la solicitud)*/
/* req.headers  (headers de la solicitud) */
/* Process.exit  (para salir del server)*/







