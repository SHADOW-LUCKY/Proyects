import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true , 'name is required'],

    },
    email:{
        type: String,
        required: [true , 'email is required'],
        unique: true

    },
    password:{
        type: String,
        required: [true , 'password is required'],
    },
    role:{
        type: String,
        required: [true , 'role is required'],
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