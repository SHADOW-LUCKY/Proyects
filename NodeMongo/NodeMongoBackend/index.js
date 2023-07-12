import express from 'express';
import dotenv from 'dotenv';
import DBConnection from './config/config.js';
import categoriasRoutes from './routes/categorias.routes.js';
import productosRoutes from './routes/productos.routes.js';
import empleadosRoutes from './routes/empleados.routes.js';
import clientesRoutes from './routes/clientes.routes.js';

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT 

DBConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use("/categorias", categoriasRoutes);
app.use("/productos", productosRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/clientes", clientesRoutes);

