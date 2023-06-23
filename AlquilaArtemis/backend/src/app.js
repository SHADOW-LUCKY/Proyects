import express from 'express';
import categoriaRoutes from './routes/categorias.routes.js';
import constructorasRoutes from './routes/constructoras.routes.js';
const app = express();

app.set("port",4000);
/* primer argumento es la ruta donde va a ir los datos de la pagina */
app.use("/api/categorias",categoriaRoutes);
app.use("/api/productos",constructorasRoutes);

export default app;