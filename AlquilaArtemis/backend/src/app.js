import express from 'express';
import categoriaRoutes from './routes/categorias.routes.js';
import constructorasRoutes from './routes/constructoras.routes.js';
import productoRoutes from './routes/productos.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';
import cotizacionesRoutes from './routes/cotizaciones.routes.js';
import procxcotiRoutes from "./routes/procxcoti.routes.js";
import cors from "cors";
const app = express();


app.set("port",3000);
const corsOption={
    methods: ["GET","POST","PUT","DELETE"],
}
app.use(cors(corsOption));
app.use(express.json());
/* primer argumento es la ruta donde va a ir los datos de la pagina */
app.use("/api/categorias",categoriaRoutes);
app.use("/api/constructoras",constructorasRoutes);
app.use("/api/productos",productoRoutes);
app.use("/api/empleados",empleadosRoutes);
app.use("/api/cotizaciones",cotizacionesRoutes);
app.use("/api/procxcoti",procxcotiRoutes);

export default app;