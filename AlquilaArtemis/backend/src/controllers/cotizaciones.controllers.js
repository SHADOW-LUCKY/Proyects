import getConnection from "./../db/database.js";

const getCotizaciones = async (req, res) => {
    const connection = await getConnection();
    const cotizaciones = await connection.query("SELECT * FROM cotizaciones");
    res.json(cotizaciones);
    return cotizaciones;
}

const  addCotizaciones = async (req, res) => {
    const connection = await getConnection();
    const { id_cotizacion,fk_id_empleado,fk_id_constructora,fecha_cotizacion,hora_cotizacion,dia_alquiler,duracion_alquiler} = req.body;
    const obj = {id_cotizacion,fk_id_empleado,fk_id_constructora,fecha_cotizacion,hora_cotizacion,dia_alquiler,duracion_alquiler};
    const result = await connection.query("INSERT INTO cotizaciones SET ?", obj);
    res.json({"message": "Cotizacion creada"});
}

const getCotiID = async (req, res) => {
    const { id } = req.params;
    const connection = await getConnection();
    const cotizaciones = await connection.query("SELECT * FROM cotizaciones WHERE id_cotizacion = ?", id);
    res.json(cotizaciones);
    return cotizaciones;
}

const DelCotiID = async (req, res) => {
    const { id } = req.params;
    const connection = await getConnection();
    const cotizaciones = await connection.query("DELETE FROM cotizaciones WHERE id_cotizacion = ?", id);
    res.json({"message": "Cotizacion eliminada"});
}

const updateCotizaciones= async (req, res) => {
    const { id } = req.params;
    const { id_cotizacion,fk_id_empleado,fk_id_constructora,fecha_cotizacion,hora_cotizacion,dia_alquiler,duracion_alquiler} = req.body;
    const obj = {id_cotizacion,fk_id_empleado,fk_id_constructora,fecha_cotizacion,hora_cotizacion,dia_alquiler,duracion_alquiler};
    const connection = await getConnection();
    const cotizaciones = await connection.query("UPDATE cotizaciones SET ? WHERE id_cotizacion = ?", [obj, id]);
    res.json({"message": "Cotizacion actualizada"});
}

export const methodsCOTI = {
    getCotizaciones,
    addCotizaciones,
    getCotiID,
    DelCotiID,
    updateCotizaciones
}