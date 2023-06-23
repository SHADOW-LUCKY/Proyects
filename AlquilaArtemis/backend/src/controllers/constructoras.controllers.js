import getConnection from "./../db/database.js";
const getConstructoras = async(req,res)=>{
    const connection = await getConnection();
    const constructoras = await connection.query("SELECT * FROM proveedores")
    res.json(constructoras)
    console.log(constructoras); 
}

export const methodsCONS ={
    getConstructoras
}