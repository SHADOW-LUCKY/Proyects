import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true , 'value is required'],

    },
    email:{
        type: String,
        required: [true , 'value is required'],
        unique: true

    },
    password:{
        type: String,
        required: [true , 'value is required'],
    },
    role:{
        type: String,
        required: [true , 'value is required'],
        default: 'user',    
        enum:['admin','user','seller']
    },
    status:{
        type: Boolean,
        default: true
    },
    googleSignIn:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
)

const usuario = mongoose.model('usuarios', usuarioSchema);

export default usuario