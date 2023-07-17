import dinero from '../models/dinero.js';
const getMoney = async (req, res) => {
   const money = await dinero.find() 
   res.json(money)
}

const postMoney = async (req, res) => {
   const money = new dinero(req.body)
   try {
      const moneySave = await money.save()
      res.json(moneySave)
   } catch (error) {
      res.status(400)
      res.send({ error: error.message })
   }
}

const delMoney = async (req, res) => {
   try {
      await dinero.deleteOne({ _id: req.params.id })
      res.json({ message: 'tipo de pago eliminado' })
   } catch (error) {
      res.status(400)
      res.send({ error: error.message })
   }
}

const putMoney = async (req, res) => {
 try {
    let uptmoney = await dinero.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.json(uptmoney)
 } catch (error) {
    res.status(400)
    res.send({ error: error.message })
 }
}

export const methMoney = {
    getMoney,
    postMoney,
    delMoney,
    putMoney
}