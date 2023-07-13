import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ciclistasRoutes from './routes/ciclistas.routes.js';
import equiposRoutes from './routes/equipos.routes.js';
import premiosRoutes from './routes/premios.routes.js';
import etapasRoutes from './routes/etapas.routes.js';
/*usamos cors par poder acceder a las rutas desde el frontend */
const corsOption={
    methods: ["GET","POST","PUT","DELETE"],
}

/*creamos la app con expres */
const app = express();
/*habilitamos la lectura de json */
app.use(express.json());
/*sacamos el puerto del .env con dotenv.config() */
dotenv.config(); 
const port = process.env.PORT
/*habilitamos cors */
app.use(cors(corsOption));
/*sacamos la conexion de la base de datos */
DBConnection();
/*habilitamos el puerto */
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
/*habilitamos las rutas */

app.use("/ciclistas", ciclistasRoutes);
app.use("/equipos", equiposRoutes);
app.use("/premios", premiosRoutes);
app.use("/etapas", etapasRoutes);

/*servidor hecho :D */

