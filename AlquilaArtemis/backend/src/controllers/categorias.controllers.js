import getConnection from "./../db/database.js";
const getCategorias= async (req, res) => {
    const connection = await getConnection();
    const categorias = await connection.query("SELECT * FROM categorias");
    res.json(categorias);
    return categorias;
}
const addCategorias = async (req, res) => {
   try {
    /* sacamos los datos del body */
    const{nombre_categoria,descripcion_categoria,img_categoria} = req.body;
    /* creamos el objeto para poder hacer la consulta */
    const obj = {nombre_categoria,descripcion_categoria,img_categoria};
    /* creamos la conexion */
    const connection = await getConnection();
    /* creamos la consulta */
    const result = await connection.query("INSERT INTO categorias SET ?", obj);
    /* si funciona la consulta manda el mensaje */
    res.json({"message": "Categoria creada"});

   } catch (error) {
       res.status(500)
       res.send(error);
   }
}
const GetCateID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const categorias = await connection.query("SELECT * FROM categorias WHERE id_categoria = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json(categorias);
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const DelCateID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const categorias = await connection.query("DELETE FROM categorias WHERE id_categoria = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Categoria eliminada"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const updateCategorias= async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* sacamos los datos del body */
        const {nombre_categoria,descripcion_categoria,img_categoria} = req.body;
        /* creamos el objeto para poder hacer la consulta */
        const obj = {nombre_categoria,descripcion_categoria,img_categoria};
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta (usamos un array para mandar dos parametros el id que dice que queremos actualizar y obj que son los cambios a ese dato)*/
        const categorias = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?", [obj, id]);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Categoria actualizada"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}


export const methodsCATE = {
    getCategorias,
    addCategorias,
    GetCateID,
    DelCateID,
    updateCategorias
}