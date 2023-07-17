import tipoDinero from '../models/tipodinero.js';

const getPayWays = async (req, res) => {
    try {
        const payWays = await tipoDinero.find()
        res.json(payWays)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const postPayWays = async (req, res) => {
    const payWay = new tipoDinero(req.body)
    try {
        const payWaySave = await payWay.save()
        res.json(payWaySave)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const delPayWays = async (req, res) => {
    try {
        await tipoDinero.deleteOne({ _id: req.params.id })
        res.json({ message: 'stock eliminado' })
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const putPayWays = async (req, res) => {
    try {
        let uptpayway = await tipoDinero.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(uptpayway)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

export const methPayWays = {
    getPayWays,
    postPayWays,
    delPayWays,
    putPayWays
}