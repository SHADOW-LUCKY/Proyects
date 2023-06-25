import getConnection from "./../db/database.js";
const getEmpleados = async(req,res)=>{
    const connection = await getConnection();
    const empleados = await connection.query("SELECT * FROM empleados")
    res.json(empleados)
    console.log(empleados); 
}

export const methodsEMP ={
    getEmpleados
}