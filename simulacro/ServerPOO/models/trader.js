import mongoose from 'mongoose';

const traderSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    edad:{
        type: Number,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true
    },
    presupuesto:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
)

const trader = mongoose.model('traders', traderSchema);

export default trader

