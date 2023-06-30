import getConnection from "./../db/database.js";

const getConstructoras = async(req,res)=>{
    const connection = await getConnection();
    const constructoras = await connection.query("SELECT * FROM constructoras");
    res.json(constructoras)
    console.log(constructoras); 
}
const addConstructoras = async (req, res) => {
    try {
          /* sacamos los datos del body */
    const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body;
    /* creamos el objeto para poder hacer la consulta */
    const obj = {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto};
    /* creamos la conexion */
    const connection = await getConnection();
    /* creamos la consulta */
    const result = await connection.query("INSERT INTO constructoras SET ?", obj);
    /* si funciona la consulta manda el mensaje */
    res.json({"message": "Constructora creada"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }

}
const GetConsID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const constructoras = await connection.query("SELECT * FROM constructoras WHERE id_constructora = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json(constructoras);
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const DelConsID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const constructoras = await connection.query("DELETE FROM constructoras WHERE id_constructora = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Constructora eliminada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const updateConstructoras= async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* sacamos los datos del body */
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body;
        /* creamos el objeto para poder hacer la consulta */
        const obj = {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto};
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const constructoras = await connection.query("UPDATE constructoras SET ? WHERE id_constructora = ?", [obj, id]);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Constructora actualizada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
    
}

export const methodsCONS ={
    getConstructoras,
    addConstructoras,
    GetConsID,
    DelConsID,
    updateConstructoras
}
