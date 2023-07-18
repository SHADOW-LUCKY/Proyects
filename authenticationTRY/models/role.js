import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    role:{
        type: String,
        required: [true , 'rol es requerido'],
        trim: true
    }
})

const roles = mongoose.model('roles', roleSchema)

export default roles