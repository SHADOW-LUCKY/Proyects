import mongoose from 'mongoose';

const tipoDineroSchema = mongoose.Schema({
    tipoDinero: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
}
)

const tipoDinero = mongoose.model('TipoDinero', tipoDineroSchema);

export default tipoDinero