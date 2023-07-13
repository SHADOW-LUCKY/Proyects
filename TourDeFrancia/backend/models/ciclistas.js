import mongoose from 'mongoose';

/*hacemos el esquema con los tipos de datosque vamos a subir (y especificar opciones) */

const ciclistaSchema = mongoose.Schema(
{/*nombre_completo ,edad,pais,genero,equipo se ponen como atributos*/
    nombre_completo:{
        type: String,
        required: true,
        trim: true
    },
    edad:{
        type: Number,
        required: true,
        trim: true
    },
    pais:{
        type: String,
        required: true,
        trim: true
    },
    genero:{
        type: String,
        required: true,
        trim: true
    },
    equipo:{
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true    
}
)

const Ciclista = mongoose.model('ciclistas', ciclistaSchema);

export default Ciclista