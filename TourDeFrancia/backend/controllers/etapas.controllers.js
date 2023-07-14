import etapas from '../models/etapas.js';

const getEtapas = async (req, res) => {
    /* seleccionamos todas las categorias en la base de datos */
    const etapa = await etapas.find();
    /* devolvemos la respuesta */
    return res.json(etapa);
}

const addEtapas = async (req, res) => {
    /*usamosel body para hacer la consulta con el modelo equipos*/
    const etapa = new etapas(req.body);
    try {
        /* guardamos en la base de datos */
        const etapaSave = await etapa.save();
        /* mostramos el resultado */
        res.json(etapaSave);
    } catch (error) {
        console.log(error.message);
    }
}

const delEtapas = async (req, res) => {
    try {
        /* hacemos la consulta sobre todo lo que hay en equipos con una id */
        await etapas.deleteOne({ _id: req.params.id });
        /* mostramos el resultado */
        res.json({ message: 'Etapa eliminada' });
    } catch (error) {
        res.status(400)
        res.send({ error: error.message });
    }
}

const uptEtapas = async (req, res) => {
    try {
        /* hacemos la consulta sobre todo lo que hay en equipos con una id */
        const etapa = await etapas.findOne({_id:req.params.id });
        if(req.body.name){
            etapa.name = req.body.name;
        }
        if(req.body.country){
            etapa.country = req.body.country;
        }
        if(req.body.description){
            etapa.description = req.body.description;
        }
        /* guardamos en la base de datos */
        await etapa.save();
        /* mostramos el resultado */
        res.json(etapa);
    } catch (error) {
        res.status(500)
        res.send({ error: error.message });
        console.log(error);
    }
}

export const mongoEtapas = {
    getEtapas,
    addEtapas,
    delEtapas,
    uptEtapas
}