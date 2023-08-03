const { Schema, model } = require('mongoose');

const CheeseSchema = new Schema({
    /* name(String), state(Boolean),
usuario(Schema.Types.ObjectId),Price(Number,
categoría(Schema.Types.ObjectId), descripción(String),
avalaible(Boolean) */
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    state: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    avalaible: {
        type: Boolean,
        default: true
    }
})

module.exports = model( 'cheeses', CheeseSchema );
