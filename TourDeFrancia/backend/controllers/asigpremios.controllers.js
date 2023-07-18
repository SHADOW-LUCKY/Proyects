import asigpremios from '../models/asigpremios.js';

const getAsigPre = async (req, res) => {
    const asigpre = await asigpremios.find()
    res.json(asigpre)
}

const postAsigPre = async (req, res) => {
    const asigpre = new asigpremios(req.body)
    try {
        const asigpremiosSave = await asigpre.save()
        res.json(asigpremiosSave)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const delAsigPre = async (req, res) => {
    try {
        await asigpremios.deleteOne({ _id: req.params.id })
        res.json({ message: 'asigpremios eliminado' })
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

export const methAsigPre = {
    getAsigPre,
    postAsigPre,
    delAsigPre
}