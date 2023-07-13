import mongoose from 'mongoose';

/*hacemos el esquema con los tipos de datosque vamos a subir (y especificar opciones) */
const premiosSchema = mongoose.Schema(
{/*name,description*/
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true  
    },
},
{
    timestamps: true
}
)

const premios = mongoose.model('premios', premiosSchema);

export default premios;
