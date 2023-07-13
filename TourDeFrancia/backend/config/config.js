import mongoose from 'mongoose';

const DBConnection = async () => {
    try {
        /* conexion a la base de datos con la url de mongo y opciones adicionales */
        const conexion = await mongoose.connect(process.env.MANGOS_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        /*definimos la conexion para ver el resultado */
        const url = `Conexion en mongo por:${conexion.connection.host}\n En el puerto:${conexion.connection.port}`;
        /*mostramos la conexión*/
        console.log(url);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
        
    }
}