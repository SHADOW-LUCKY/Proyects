import express from 'express'
import cors from 'cors'
import dineroRoutes from '../routes/dinero.routes.js'
import accionesRoutes from '../routes/acciones.routes.js'
import traderRoutes from '../routes/trader.routes.js'
import tipoDineroRoutes from '../routes/tipodinero.routes.js'
/* ADVERTENCIA : tener en cuenta el orden de lads funciones del server */
class Server {
    constructor () {
        this.app = express()/* creamos el server */
        this.port = process.env.PORT /* usamos la variable PORT de entorno */ 
        this.middlewares()
        this.moneypath = '/api/dinero'
        this.actionspath = '/api/acciones'
        this.traderpath = '/api/trader'
        this.pwpath = '/api/tipodinero'
        this.routes()/* nos referimos a la funcion routes */
    }
    middlewares(){
        this.app.use(cors()) /* cors */
        this.app.use(express.json())
        this.app.use(express.static('public'))/* nos referimos a la carpeta public */
    }
    routes(){
        this.app.use(this.moneypath,dineroRoutes) 
        this.app.use(this.actionspath,accionesRoutes)
        this.app.use(this.traderpath,traderRoutes)
        this.app.use(this.pwpath,tipoDineroRoutes)
    }
    listener(){
        this.app.listen(this.port , () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
            /* inicializamos el servidor */
        })
    }    
}
 
export default Server