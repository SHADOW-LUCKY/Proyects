import getConnection from "./../db/database.js";
const getEmpleados = async(req,res)=>{
    const connection = await getConnection();
    const empleados = await connection.query("SELECT * FROM empleados")
    res.json(empleados)
    console.log(empleados); 
}
const addEmpleados = async (req, res) => {
    try {
        /* sacamos los datos del body */
    const {nombre_empleado,email_empleado,celular_empleado,password_empleado } = req.body;
    /* creamos el objeto para poder hacer la consulta */
    const obj = {nombre_empleado,email_empleado,celular_empleado,password_empleado };
    /* creamos la conexion */
    const connection = await getConnection();
    /* creamos la consulta */
    const result = await connection.query("INSERT INTO empleados SET ?", obj);
    /* si funciona la consulta manda el mensaje */
    res.json({"message": "Empleado creado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const GetEmpID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const empleados = await connection.query("SELECT * FROM empleados WHERE id_empleado = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json(empleados);
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const DelEmpID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const empleados = await connection.query("DELETE FROM empleados WHERE id_empleado = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Empleado eliminado"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const updateEmpleados = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* sacamos los datos del body */
        const {nombre_empleado,email_empleado,celular_empleado,password_empleado } = req.body;
        /* creamos el objeto para poder hacer la consulta */
        const obj = {nombre_empleado,email_empleado,celular_empleado,password_empleado };
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const empleados = await connection.query("UPDATE empleados SET ? WHERE id_empleado = ?", [req.body, id]);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Empleado actualizado"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const methodsEMP ={
    getEmpleados,
    addEmpleados,
    GetEmpID,
    DelEmpID,
    updateEmpleados
}
