# Aprendizaje de Node.js
    by Nicolas Ordoñez V1

- ## Que es?
node.js e s una extension de javascript que no se ejecuta en el navegador mayoritariamente es usado para los servidores web(back-end). gracias a su manera de poder organizar sus recursos,  ser escalable y excelente para app que requieran ser rapidas e inmersivas, usar un solo lenguaje (JS) para todo el proyecto esn verdaderamente util para su equipo y tiene ademas NPM de su lado que en este caso seria un instalador de librerias para todas sus necesidades

- ## Usando node.js
node es simplemente una iteracion de JS en otro ambiente en este caso se puede ejecutar en la consola para alguno ejecicios basicos y se usa tambien para ejecutar archivos grandes ahi mismo(como servidores)

**reordar como iniciar un archivo JS con con Node.Js**

simplemente escriba: node (nombre del archivo)

- ## (FS) Flie System
file system es un modulo de JS  en el cual se pueden crear y alterar archivos  en nuestro explorador(util cuando necesitamos archivos del usuario)

algunos comando basicos son:

- readFile/readFileSync: para leer un archivo y sus contenidos (normalmente debe especificar su modo de lectura. Ej: utf-8 ,utf-4 etc) 

- writeFile/writeFileSync: para escribir en un archivo o crear un archivo de ser necesario 

- writeHead: es usado para definir como llegan alas consultas y los tipos de informacion en este caso como: estado, tipo, etc.

**TENER EN CUENTA:** si el comando esta con Sync significa que es sincrono en caso contrario asincrono

- ## SYNC Y ASYNC 

node fue diseñado de manera que va en un solo hilo(subproceso) y toods los procesos se encuentran ahi. El codigo sincrono era la manera original de escribir el codigo pero tine muhcas falencias, siendo el caso que una funcion no puede ejecutarse sin que la otra ya halla dado resultado.

En cambio el codigo asincrono ayuda en que si una funcion se tarda mucho en ejecutar se manda al fondo(background) y simplemente se continua con la funcion siguiente para no demorar los procesos que van despues de la misma y a que  todos los usuarios que estan usando al aplicaion necesitan esten en el mismo hilo por ende hay que tener en cuenta com usamos los recurso de nuestro server

he aqui unos ejemplos de codigo sincrono y asincrono

### SYNC

```js
 const fs = require('fs');

 //Blocking, synchronous way

 const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 console.log(textIn);
 const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
 fs.writeFileSync('./txt/output.txt', textOut);
 console.log('File written!');

```
en este caso el resultado no se puede dar si una de las funciones  tarda mucho en responder (un problema grande en este mundo tan veloz)

### async 

```js
 const fs = require('fs');
 //Non-blocking, asynchronous way
 fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
   if (err) return console.log('ERROR! 💥')
   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
     console.log(data2);
     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
       console.log(data3)
       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
         console.log('Your file has been written 😁');
       })
     });
   });
 });
 console.log('Will read file!');
```

notese como las estrutura cambia para no dar problemas  alas demas funciones que deseen ejecutarse por ejemplo la funcion anidada que hay arriba va atardar mucho y si ejecuta el programa se dara cuenta que se ejecuto primero el console.log del final porque tarda mucho menos tiempo en hacerlo 

**Advertencia: Esta NO es la mejor manera de hacerlo codigo asincrono y de hecho es un problema bastante comun conocido como callback hell(su principal caracteristica es el triangulo que vemos formarse)**

## Servidores con node.js (http)
node tiene bastantes modulos para su uso principal que en este caso serian los servidores http es util para poder manejar su primer servidor de manera sencilla y facil
#### Como lo hacemos?
he aqui un ejemplo sencillo de como empezar un servidor local

```js
//importacion
const http = require('http');
//funcion de crear el servidor
const server = http.createServer((req, res) => {
    res.end('hello world')
})
//ponerlo en funcionamiento
server.listen(8000,()=>{
    console.log('server en funcionamiento')
})
```
lo que hacemos aqui es una pequeña conexion del servidor local para mostrarlos en el navegador usamos un fucncion con los parametros de request(req) y response(res) para poder controlar las acciones que hace el usuario con el servidor(para usarlo solo debemos meternos en localhost)

#### Routing

se necesita tener rutas en nuestro servidor para las interacciones mas especificas del usuario con un servidor y se puede nota ya que cada vez que solicitamos algo al servidor notamos que su url cambia de manera drastica y rara aveces 

esto cambios los definimos nosotros como programadores en nuestro programa para el mismo usuario por ejemplo:

```js
const http = require('http');
const url = require('url');
//modulos
const server = http.createServer((req, res) => {
    //funcion con enrutacion 
    const pathName = req.url
    //rutas
    if(pathName == '/overview'){
        res.end('This is the OVERVIEW')
    }else if(pathName == '/product'){
        res.end('This is the PRODUCT')
    }else if(pathName == '/users'){
        res.end('This is the USERS')
    }else{
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }
    
})
//llamada al servidor
server.listen(8000, () => {
    console.log('Listening on port 8000');
});
```

las enrutacions son mas simples de lo que uno espera ya que son opciones en si mismas que delimitamos nosotros para el usuario y darle los servicios unicamente necesarios y no dar ninguna informacion privadad del servidor

las enrutaciones son unos de los pilares de las paginzas web e incluso muchos proyectos que neceitan de un servidor

```js
//leer archivo json
const data = fs.readFileSync(`${__dirname}/json/data.json`,'utf-8')
//lo pasamos de amnera legible
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url
    if(pathName == '/overview'){
        res.end('This is the OVERVIEW')
    }else if(pathName == '/product'){
        res.end('This is the PRODUCT')
    }else if(pathName == '/users'){
        res.end('This is the USERS')
    }else if(pathName == '/api'){
        //damos el tipo de dato que vamos a pasar al navegador
        res.writeHead(200, { 'Content-Type': 'application/json' })
        //pasamos los datos
        res.end(data)
    }else{
        res.writeHead(404, {
            'content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }
    
})

server.listen(8000, () => {
    console.log('Listening on port 8000');
});
```
en este caso se puede ver  pero vemos que hay datos tipo json aqui lo cuales son los basicos para crear una api que en corto es un base de datos a la cual podemos acceder por medio de rutas(URLs)

## Url

el modulo url es utilizado(en estos videos) para identificar los valores que usan cada vez que accedemos a un link con ciertos datos para procesos que tengamos que hacer gracias a interacciones con el usuario

```
http://localhost:8000/product?id=1
```
miremos este link como ejemplo tiene un signo de interrogacion(?)que denota una valor mas adelante que podemos identificar como "query" y que podemos usar para darle mas dinamismo a la pagina

**OJO esta no es la mejor manera de usar lo querys por problemas de privacidad hay mejores maneras que se verna mas adelante**

## (mini bonus) import y export 
import y export son usados para la modularizacion de archivos osea oragnizar de mejor manera tus archivos dependiendo de que funciones cumplan y asi darte un mejor manejo del programa

```js
const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemp = require('./modules/replaceTemp.js');
```

esta seria la manera de importar 

```js
module.exports = (temp, data) => {
    let output = temp.replace(/{%NAME%}/g, data.productName)
    output = output.replace(/{%IMG%}/g, data.image)
    output = output.replace(/{%PRICE%}/g, data.price)
    output = output.replace(/{%FROM%}/g, data.from)
    output = output.replace(/{%NUTRIENTS%}/g, data.nutrients)
    output = output.replace(/{%QUANTITY%}/g, data.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, data.description)
    output = output.replace(/{%ID%}/g, data.id)

    if(data.organic != true) {
        output = output.replace(/{%ORGANIC%}/g, 'not-organic')
    }
    return output
}
```

y este seria un ejemplo de exportar una funcion anonima

**Hay mas maneras de hacer esto gracias al avance de node pero estos son las mas basicas**

## NPM (Node Package Manager)

Con NPM, puedes instalar, actualizar y administrar dependencias de forma sencilla. Además, puedes compartir tus propios paquetes y contribuir a la comunidad de desarrollo de Node.js

### Que es una dependencia?
una dependencia son archivo que tienen codigo que usaremos en nuestros proyectos y hay dos tipos:

- regulares: que son para usar codigo que queremos en nuestro proyecto 

- desarolladores: codigo usado para el proyecto en si pero que si se remueve no afectara al proyecto

### como iniciar npm 

nos dirigimos a nuestra carpeta que tiene el proyecto y desplegamos la consola

```
npm init
```
depues de escribir este comando se creara un archivo para que este funcione(package.json) en el cual nos dara las funciones de las dependencias


### instalar paquetes

dependiencias regulares(revise que es una dependencia):

```
npm install <nombre de la dependencia>
```

dependencias de desarollo:
```
npm install -D <nombre de la dependencia>
```

si deseas instalarla globalmente para que no tengas que descargarla cada vez que hagas un nuevo proyecto 

```js
//puedes abreviar install a i
npm i <nombre de la dependencia> -g
```
### iniciar el proyecto 
 
miremos el esquema del archivo que npm nos puso en nuestra carpeta

```json
{
  "name": "starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```
en la parte de scripts se pueden cambiar las cosas para usar el poder de npm para ejecutar todo el archivo 


```json
{
  "name": "starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

y para usarlo se escribe el siguiente comando

```
npm run <nombre del script>
```

**RECUERDA si no sabes como usar una dependencia ve a [NPM](https://www.npmjs.com) y busca la libreria que deseas usar**

