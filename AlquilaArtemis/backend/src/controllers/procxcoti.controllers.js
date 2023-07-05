import getConnection from "./../db/database.js";

const getProcxcoti = async (req, res) => {
    const connection = await getConnection();
    const procxcoti = await connection.query("SELECT * FROM productos_x_cotizaciones");
    res.json(procxcoti);
    return procxcoti;
}
const addProcxcoti = async (req, res) => {
    try {
        /* sacamos los datos del body */
        const{id_registro,fk_id_producto,fk_id_detalle} = req.body;
        /* creamos el objeto para poder hacer la consulta */
        const obj = {id_registro,fk_id_producto,fk_id_detalle};
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const result = await connection.query("INSERT INTO productos_x_cotizaciones SET ?", obj);
        /* si funciona la consulta manda el mensaje */
        res.json({"message": "Proceso creado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const  GetProcxcotiID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const procxcoti = await connection.query("SELECT * FROM productos_x_cotizaciones WHERE id_registro = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json(procxcoti);
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

const DelProcxcotiID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const procxcoti = await connection.query("DELETE FROM productos_x_cotizaciones WHERE id_registro = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Proceso eliminado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
 
const updateProcxcoti= async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* sacamos los datos del body */
        const {id_registro,fk_id_producto,fk_id_detalle} = req.body;
        /* creamos el objeto para poder hacer la consulta */
        const obj = {id_registro,fk_id_producto,fk_id_detalle};
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta (usamos un array para mandar dos parametros el id que dice que queremos actualizar y obj que son los cambios a ese dato)*/
        const procxcoti = await connection.query("UPDATE productos_x_cotizaciones SET ? WHERE id_registro = ?", [obj, id]);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Proceso actualizado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export methodsProcxcoti = {
    getProcxcoti,
    addProcxcoti,
    GetProcxcotiID,
    DelProcxcotiID,
    updateProcxcoti
}
