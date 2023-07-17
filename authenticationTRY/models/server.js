import express from 'express'
import cors from 'cors'
import userRoutes from '../routes/user.routes.js'
/* ADVERTENCIA : tener en cuenta el orden de lads funciones del server */
class Server {
    constructor () {
        this.app = express()/* creamos el server */
        this.port = process.env.PORT /* usamos la variable PORT de entorno */ 
        this.middlewares()
        this.userpath = '/api/users'
        this.routes()/* nos referimos a la funcion routes */
    }
    middlewares(){
        this.app.use(cors()) /* cors */
        this.app.use(express.json())
        this.app.use(express.static('public'))/* nos referimos a la carpeta public */
    }
    routes(){
        this.app.use(this.userpath, userRoutes) 
    }
    listener(){
        this.app.listen(this.port , () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
            /* inicializamos el servidor */
        })
    }    
}
 
export default Server