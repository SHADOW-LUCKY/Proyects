const Categoria  = require('../models/Categoria.js');  

const getCategorias = async(req,res)=>{
    const categorias = await Categoria.find().populate('usuario', ['nombre','email']);
    res.json(categorias);
}

const getCategoria = async (req, res) => {
    idsearch = req.params.id;
    const categoriaesp = await Categoria.findById(idsearch);
    if (categoriaesp) {
        res.json(categoriaesp);
    }else{
        res.json({
            msg: `La categoria no existe`
        });
    }
}
const postCategoria = async(req, res ) => {

    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({ nombre });

    if ( categoriaDB ) {
        return res.status(400).json({
            msg: `La categoria ${ categoriaDB.nombre }, ya existe`
        });
    }
   /*  console.log("usuario:",usuario); */
    // Generar la data a guardar
    const data = {
        nombre,
        usuario: req.usuario._id
    }

    
    const categoria = new Categoria( data );

    // Guardar DB
    await categoria.save();

    res.status(201).json(categoria);

}
putCategoria = async (req, res) => {
    const id = req.params.id;
    const put = await Categoria.findById(id)
    if(put){
        const categoria = await Categoria.findByIdAndUpdate( id, req.body, { new: true }); 
        res.json(categoria);
    }else{
        res.json({
            msg: `La categoria no existe`
        });
    }
}

const deleteCategoria = async (req, res) => {
    const id = req.params.id;
    const del = await Categoria.findById(id)
    if(del){
        await Categoria.findByIdAndDelete(id); 
        res.json({
            msg: `Categoria eliminada`
        })
    }else{
        res.json({
            msg: `La categoria no existe`
        });
    }
}


module.exports = {
    postCategoria,
    getCategoria,
    putCategoria,
    getCategorias,
    deleteCategoria 
}