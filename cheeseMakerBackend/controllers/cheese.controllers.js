const CHEESE = require('../models/Cheeses.js');
const {categoriaExistsById} = require('../helpers/db.validators.js');
const getCheeses = async (req, res) => {
    const cheeses = await CHEESE.find().populate('usuario', 'nombre')
    res.json(cheeses);
}

const postCheese = async (req, res) => {
    const {name,state,usuario,...body} = req.body; 
    
    const cheeseDB = await CHEESE.findOne({ name });

    const { categoria } = req.body;

    const categoriaDB = await categoriaExistsById(categoria);
    if ( cheeseDB ) {
        return res.json({
            msg: `La categoria ${ cheeseDB.nombre }, ya existe`
        });
    }else if(categoriaDB){
        return res.json({
            msg: `La categoria que buscas, no existe`
        });
    }else{
        const data = {
            name: name.toUpperCase(),
            state,
            usuario,
            ...body
        }
        const cheese = await new CHEESE(data);
        await cheese.save();
        res.json(cheese);
    }
}
const putCheese = async (req, res) => {
    const id = req.params.id;
    const cheese = await CHEESE.findById(id);
    const {categoria} = req.body;
    const categoriaDB = await categoriaExistsById(categoria);

    if (cheese && !categoriaDB) {
        const cheese = await CHEESE.findByIdAndUpdate(id, req.body, { new: true });
        res.json(cheese);
    }else{
        res.json({
            msg: `La categoria no existe o el queso no existe` 
        });
    }
}
const deleteCheese = async (req, res) => {
    const id = req.params.id;
    const del = await CHEESE.findById(id)
    if(del){
        await CHEESE.findByIdAndDelete(id); 
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
    getCheeses,
    postCheese,
    putCheese,
    deleteCheese
}
