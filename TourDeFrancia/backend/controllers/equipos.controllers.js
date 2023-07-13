import equipos from '../models/equipos.js';

const getEquipos = async (req, res) => {
    /* seleccionamos todas las categorias en la base de datos */
    const equipos = await equipos.find();
    /* devolvemos la respuesta */
    return res.json(equipos);
}

const addEquipos = async (req, res) => {
    /*usamosel body para hacer la consulta con el modelo equipos*/
    const equipo = new equipos(req.body);
    try {
        /* guardamos en la base de datos */
        const equipoSave = await equipo.save();
        /* mostramos el resultado */
        res.json(equipoSave);
    } catch (error) {
        console.log(error.message);
    }
}

const delEquipos = async (req, res) => {
    try {
        /* hacemos la consulta sobre todo lo que hay en equipos con una id */
        await equipos.deleteOne({ _id: req.params.id });
        /* mostramos el resultado */
        res.json({ message: 'Equipo eliminado' });
    } catch (error) {
        res.status(400)
        res.send({ error: error.message });
    }
}

const uptEquipos = async (req, res) => {
    try {
        const equipo = await equipos.findOne({_id:req.params.id });
        if(req.body.name){
            equipo.name = req.body.name;
        }
        if(req.body.country){
            equipo.country = req.body.country;
        }
        if(req.body.description){
            equipo.description = req.body.description;
        }
        /* guardamos en la base de datos */
        await equipo.save();
        /* mostramos el resultado */
        res.json(equipo);
    } catch (error) {
        res.status(500)
        res.send({ error: error.message });
        console.log(error);
    }
}

export const mongoEquipos = {
    getEquipos,
    addEquipos,
    delEquipos,
    uptEquipos
}