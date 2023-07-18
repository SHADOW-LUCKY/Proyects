import mongoose from 'mongoose';

const asigpreSchema = mongoose.Schema({
    equipo:{
        type: String,
        required: [true, 'el equipo es requerido'],
        trim: true   
    },
    prize:{
        type: String,
        required: [true, 'el premio es requerido'],
        trim: true
    }

},{
    timestamps: true
})

const asigpremios = mongoose.model('asigpremios', asigpreSchema);

export default asigpremios