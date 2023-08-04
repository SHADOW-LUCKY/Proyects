const { response } = require('express');
const { ObjectId } = require('mongoose').Types;

const  Usuario  = require('../models/Usuario.js');
const  Categoria  = require('../models/Categoria.js');
const  Cheese  = require('../models/Cheese.js');

const allowedCollections = [
    'usuarios',
    'categorias',
    'cheeses',
    'roles'
]

const searchUsers = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); // TRUE 

    if ( isMongoID ) {
        const usuario = await Usuario.findById(criterio);
        return res.json({
            results: ( usuario ) ? [ usuario ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const usuarios = await Usuario.find({
        $or: [{ nombre: regex }, { email: regex }],
        $and: [{ estado: true }]
    });

    res.json({
        results: usuarios
    });

}

const searchCategorias = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); // TRUE 

    if ( isMongoID ) {
        const categoria = await Categoria.findById(criterio);
        return res.json({
            results: ( categoria ) ? [ categoria ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const categorias = await Categoria.find({ nombre: regex, estado: true });

    res.json({
        results: categorias
    });

}

const searchCheeses = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); // TRUE 

    if ( isMongoID ) {
        const cheese = await Cheese.findById(criterio)
                            .populate('categoria','nombre');
        return res.json({
            results: ( cheese ) ? [ cheese ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const cheeses = await Cheese.find({ name: regex, state: true })
                            .populate('categoria','nombre')

    res.json({
        results: cheeses
    });

}

const search = ( req, res = response ) => {
    
    const { coleccion, criterio  } = req.params;

    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion) {
        case 'usuarios':
            searchUsers(criterio, res);
        break;
        case 'categorias':
            searchCategorias(criterio, res);
        break;
        case 'cheeses':
            searchCheeses(criterio, res);
        break;

        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
    }

  

}



module.exports = {
    search
}