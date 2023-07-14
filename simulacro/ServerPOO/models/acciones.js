import mongoose from "mongoose";

const accionesSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
}
)

const acciones = mongoose.model('Acciones', accionesSchema);

export default acciones;

