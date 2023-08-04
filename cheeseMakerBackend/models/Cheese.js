const { Schema, model } = require('mongoose');

const CheeseSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
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
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    description: { type: String },
    available: { type: Boolean, default: true },
});


CheeseSchema.methods.toJSON = function() {
    const { __v, state, ...data  } = this.toObject();
    return data;
}


module.exports = model( 'Cheese', CheeseSchema );
