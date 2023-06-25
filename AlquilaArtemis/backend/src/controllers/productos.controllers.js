import getConnection from "./../db/database.js";
const getProductos = async(req,res)=>{
    const connection = await getConnection();
    const productos = await connection.query("SELECT * FROM productos")
    res.json(productos)
    console.log(productos); 
}

export const methodsPROC ={
    getProductos
}