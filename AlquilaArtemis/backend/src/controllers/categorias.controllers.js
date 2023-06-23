import getConnection from "./../db/database.js";
const getCategorias= async (req, res) => {
    const connection = await getConnection();
    const categorias = await connection.query("SELECT * FROM categorias");
    res.json(categorias);
    console.log(categorias);
}


export const methodsCATE = {
    getCategorias
}