import asigpremios from '../models/asigpremios.js';

const getAsigPre = async (req, res) => {
    const asigpremios = await asigpremios.find()
    res.json(asigpremios)
}

const postAsigPre = async (req, res) => {
    const asigpremios = new asigpremios(req.body)
    try {
        const asigpremiosSave = await asigpremios.save()
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

export const mongoAsigPre = {
    getAsigPre,
    postAsigPre,
    delAsigPre
}