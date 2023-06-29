import express from 'express';
import categoriaRoutes from './routes/categorias.routes.js';
import constructorasRoutes from './routes/constructoras.routes.js';
import productoRoutes from './routes/productos.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';

const app = express();

app.set("port",3000);

app.use(express.json());
/* primer argumento es la ruta donde va a ir los datos de la pagina */
app.use("/api/categorias",categoriaRoutes);
app.use("/api/constructoras",constructorasRoutes);
app.use("/api/productos",productoRoutes);
app.use("/api/empleados",empleadosRoutes);

export default app;