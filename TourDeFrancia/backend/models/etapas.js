import mongoose from 'mongoose';

/*hacemos el esquema con los tipos de datosque vamos a subir (y especificar opciones) */
const etapasSchema = mongoose.Schema(
{/*name,country,description*/
    name:{
        type: String,
        required: true,
        trim: true
    },
    country:{
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

const etapas = mongoose.model('etapas', etapasSchema);

export default etapas;
