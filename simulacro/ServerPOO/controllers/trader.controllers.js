import trader from '../models/trader.js';

const getTraders = async (req, res) => {
    const traders = await trader.find()
    res.json(traders)
}

const postTraders = async (req, res) => {
    const traders = new trader(req.body)
    try {
        const traderSave = await traders.save()
        res.json(traderSave)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const delTraders = async (req, res) => {
    try {
        await trader.deleteOne({ _id: req.params.id })
        res.json({ message: 'Trader eliminado' })
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

const putTraders = async (req, res) => {
    try {
        let upttrader = await trader.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(upttrader)
    } catch (error) {
        res.status(400)
        res.send({ error: error.message })
    }
}

export const methTraders = {
    getTraders,
    postTraders,
    delTraders,
    putTraders
}