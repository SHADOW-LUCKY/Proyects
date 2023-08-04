const { response } = require('express');
const  Cheese  = require('../models/Cheese.js');


const getCheeses = async(req, res = response ) => {

    const { until = 5, from = 0 } = req.query;
    const query = { state: true };

    const [ total, cheeses ] = await Promise.all([
        Cheese.countDocuments(query),
        Cheese.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip( Number( from ) )
            .limit(Number( until ))
    ]);

    res.json({
        total,
        cheeses
    });
}

  const getCheese = async(req, res = response ) => {

    const { id } = req.params;
    const  cheese = await  Cheese.findById( id )
                            .populate('usuario', 'nombre')
                            .populate('categoria', 'nombre');

    res.json( cheese );

}


const postCheese = async(req, res = response ) => {

    const { state, usuario, ...body } = req.body;

    const cheeseDB = await Cheese.findOne({ name: body.name });

    if ( cheeseDB ) {
        return res.status(400).json({
            msg: `that cheese ${ cheeseDB.name }, ya existe`
        });
    }

    // Generar la data a guardar
    const data = {
        ...body,
        name: body.name.toUpperCase(),
        usuario: req.usuario._id
    }

    const cheese = new Cheese( data );

    // Guardar DB
    await cheese.save();

    res.status(201).json(cheese);

}

const putCheese = async( req, res = response ) => {

    const { id } = req.params;
    const { state, usuario, ...data } = req.body;

    if( data.name ) {
        data.name  = data.name.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const cheese = await Cheese.findByIdAndUpdate(id, data, { new: true });

    res.json( cheese );

}

const deleteCheese = async(req, res = response ) => {

    const { id } = req.params;
    const cheeseDeleted = await Cheese.findByIdAndUpdate( id, { state: false }, {new: true });

    res.json( cheeseDeleted );
} 
 



module.exports = {
    getCheeses,
    getCheese,
    postCheese,
    putCheese,
    deleteCheese  
}