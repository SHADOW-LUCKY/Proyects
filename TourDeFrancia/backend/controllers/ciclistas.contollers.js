import ciclistas from '../models/ciclistas.js';

const getCiclistas = async (req, res) => {
    /* hacemos la consulta sobre todo lo que hay en ciclistas */
    const ciclistas = await ciclistas.find();
    /* mostramos el resultado */
    res.json(ciclistas);
}

const addCiclista = async (req, res) => {
    /*usamosel body para hacer la consulta con el modelo ciclistas */
    const ciclistas = new ciclistas(req.body);
    try {
        /* guardamos en la base de datos */
        const ciclistaSave = await ciclistas.save();
        /* mostramos el resultado */
        res.json(ciclistaSave);
    }
    catch (error) {
        res.status(500)
        console.log(error.message);
    }
}

const delCiclista = async (req, res) => {
    try {
        /* hacemos la consulta sobre todo lo que hay en ciclistas con una id */
        await ciclistas.deleteOne({ _id: req.params.id });
        /* mostramos el resultado */
        res.json({ message: 'Ciclista eliminada' });
    } catch (error) {
        res.status(400)
        res.send({ error: error.message });
    }
}

const uptCiclista = async (req, res) => {
    try {
        /*usamos la id que queremos actualizar */
        const ciclista = await ciclistas.findOne({_id:req.params.id });
        /* hacemos la consulta si hay algo en el body (y si lo hay actualizamos)*/
        if(req.body.nombre_completo){
            ciclista.nombre_completo = req.body.nombre_completo;
        }
        if(req.body.edad){
            ciclista.edad = req.body.edad;
        }
        if(req.body.pais){
            ciclista.pais = req.body.pais;
        }
        if(req.body.genero){
            ciclista.genero = req.body.genero;
        }
        if(req.body.equipo){
            ciclista.equipo = req.body.equipo;
        }
        /* guardamos en la base de datos */
        await ciclista.save();
        /* mostramos el resultado */
        res.json(ciclista);
    } catch (error) {
        res.status(500)
        res.send({ error: error.message });
        console.log(error);
    }
}

export const mongoCiclistas = {
    getCiclistas,
    addCiclista,
    delCiclista,
    uptCiclista
}