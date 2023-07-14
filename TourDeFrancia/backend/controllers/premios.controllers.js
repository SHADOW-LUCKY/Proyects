import premios from '../models/premios.js';

const getPremios = async (req, res) => {
    /* seleccionamos todas las categorias en la base de datos */
    const premio = await premios.find();
    /* devolvemos la respuesta */
    return res.json(premio);
}

const addPremios = async (req, res) => {
    /* hacemos la consulta sobre todo lo que hay en equipos con una id */
    const premio = new premios(req.body);
    try {
        /* guardamos en la base de datos */
        const premiosSave = await premio.save();
        /* mostramos el resultado */
        res.json(premiosSave);
    } catch (error) {
        res.status(500)
        res.send({ error: error.message });
        console.log(error);
    }
}

const delPremios = async (req, res) => {
    try {
        /* hacemos la consulta sobre todo lo que hay en equipos con una id */
        await premios.deleteOne({ _id: req.params.id });
        /* mostramos el resultado */
        res.json({ message: 'Premio eliminado' });
    } catch (error) {
        res.status(400)
        res.send({ error: error.message });
    }
}

const uptPremios = async (req, res) => {
    try {
        const premios = await premios.findOne({_id:req.params.id });
        if(req.body.name){
            premios.name = req.body.name;
        }
        if(req.body.description){
            premios.description = req.body.description;
        }
        /* guardamos en la base de datos */
        await premios.save();
        /* mostramos el resultado */
        res.json(premios);
    } catch (error) {
        res.status(500)
        res.send({ error: error.message });
        console.log(error);
    }
}

export const mongoPremios = {
    getPremios,
    addPremios,
    delPremios,
    uptPremios
}