import getConnection from "./../db/database.js";
const getProductos = async(req,res)=>{
    const connection = await getConnection();
    const productos = await connection.query("SELECT * FROM productos")
    res.json(productos)
    console.log(productos); 
}
const addProductos = async (req, res) => {
    try {
        /* sacamos los datos del body */
    const {nombre_producto ,precio_x_dia,stock_producto,categoria_producto} = req.body;
    /* creamos el objeto para poder hacer la consulta */
    const obj = {nombre_producto ,precio_x_dia,stock_producto,categoria_producto};
    /* creamos la conexion */
    const connection = await getConnection();
    /* creamos la consulta */
    const result = await connection.query("INSERT INTO productos SET ?", obj);
    /* si funciona la consulta manda el mensaje */
    res.json({"message": "Producto creado"});
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const GetProdID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const productos = await connection.query("SELECT * FROM productos WHERE id_producto = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json(productos);
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const DelProdID = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const productos = await connection.query("DELETE FROM productos WHERE id_producto = ?", id);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Producto eliminado"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}
const updateProductos = async (req, res) => {
    try {
        /* usamos el id como parametro */
        const { id } = req.params;
        /* sacamos los datos del body */
        const {nombre_producto ,precio_x_dia,stock_producto,categoria_producto} = req.body;
        /* creamos el objeto para poder hacer la consulta */
        const obj = {nombre_producto ,precio_x_dia,stock_producto,categoria_producto};
        /* creamos la conexion */
        const connection = await getConnection();
        /* creamos la consulta */
        const productos = await connection.query("UPDATE productos SET ? WHERE id_producto = ?", [req.body, id]);
        /* si funciona la consulta manda el dato requerido */
        res.json({"message": "Producto actualizado"});
        
    } catch (error) {
        res.status(500)
        res.send(error);
    }
}

export const methodsPROC ={
    getProductos,
    addProductos,
    GetProdID,
    DelProdID,
    updateProductos
}
