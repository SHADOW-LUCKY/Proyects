import mongoose from 'mongoose';

const categoriaSchema = mongoose.Schema(
{
    CategoriaNombre:{
        type: String,
        required: true,
        trim: true
    },
    Descripcion:{
        type: String,
        required: true,
        trim: true,
    },
    Imagen:{
        type: String,
        required: true,
        trim: true,
    }
},  
{
    timestamps: true
}
)

const Categoria = mongoose.model('categorias', categoriaSchema);

export default Categoria