import express from 'express';
import cors from 'cors';
import ciclistasRoutes from '../routes/ciclistas.routes.js';
import equiposRoutes from '../routes/equipos.routes.js';
import premiosRoutes from '../routes/premios.routes.js';
import etapasRoutes from '../routes/etapas.routes.js';
import asigPremiosRoutes from '../routes/asigpremios.routes.js';

class Server {
    constructor () {
        this.app = express()/* creamos el server */
        this.port = process.env.PORT /* usamos la variable PORT de entorno */
        this.middlewares()
        this.ciclistasPATH = '/ciclistas'     
        this.equiposPATH = '/equipos' 
        this.premiosPATH = '/premios' 
        this.etapasPATH = '/etapas' 
        this.asigPremiosPATH = '/asig'
        this.routes()
    
    }
    middlewares(){
        this.app.use(cors()) /* cors */
        this.app.use(express.json())
        this.app.use(express.static('public'))/* nos referimos a la carpeta public */
    }
    routes(){
        this.app.use(this.ciclistasPATH,ciclistasRoutes) 
        this.app.use(this.equiposPATH, equiposRoutes)
        this.app.use(this.premiosPATH, premiosRoutes)
        this.app.use(this.etapasPATH, etapasRoutes)
        this.app.use(this.asigPremiosPATH, asigPremiosRoutes)
    }
    listener(){
        this.app.listen(this.port , () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
            /* inicializamos el servidor */
        })
    }
}

export default Server