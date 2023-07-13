import mongoose from 'mongoose';

/*hacemos el esquema con los tipos de datosque vamos a subir (y especificar opciones) */
const equiposSchema = mongoose.Schema(
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

const Equipos = mongoose.model('equipos', equiposSchema);

export default Equipos;
