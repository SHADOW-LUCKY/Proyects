import Categoria from '../models/categorias.js';

const getCategorias = async (req, res) => {
    /* seleccionamos todas las categorias en la base de datos */
    const categorias = await Categoria.find();
    /* devolvemos la respuesta */
    res.json(categorias);
}
const addCategorias = async (req, res) => {
    const categoria = new Categoria(req.body);
    try {
        const categoriaSave = await categoria.save();
        res.json(categoriaSave);
    } catch (error) {
        console.log(error.message);
    }
}
const delCategorias = async (req, res) => {
    try {
        await Categoria.deleteOne({ _id: req.params.id });
        res.json({ message: 'Categoria eliminada' });
    } catch (error) {
        res.status(400)
        res.send({ error: error.message });
    }
}
const uptCategorias = async (req, res) => {
    try {
        const category = await Categoria.findOne({_id:req.params.id });
        if(req.body.CategoriaNombre){
            category.CategoriaNombre = req.body.CategoriaNombre;
        }
        if(req.body.Descripcion){
            category.Descripcion = req.body.Descripcion;
        }
        if(req.body.Imagen){
            category.Imagen = req.body.Imagen;
        }
        await category.save();
        res.json(category);
    } catch (error) {
        res.status(500)
        res.send({ error: error.message });
        console.log(error);
    }
}

export const mongoCate = {
    getCategorias,
    addCategorias,
    delCategorias,
    uptCategorias
}