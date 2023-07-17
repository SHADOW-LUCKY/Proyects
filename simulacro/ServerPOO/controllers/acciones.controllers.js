import acciones from '../models/acciones.js';

const getActions = async (req, res) => {
    const actions = await acciones.find()
    res.json(actions)
}

const postAction = async (req, res) => {
    const action = new acciones(req.body)
    try {
        const actionSave = await action.save()
        res.json(actionSave)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const delAction = async (req, res) => {
    try {
        await acciones.deleteOne({ _id: req.params.id })
        res.json({ message: 'Stock eliminado' })
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const putAction = async (req, res) => {
    try {
        let uptaction = await acciones.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(uptaction)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

export const methActions = {
    getActions,
    postAction,
    delAction,
    putAction
}