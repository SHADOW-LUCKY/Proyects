import  Clientes from "../models/clientes.js"

const getCli = async (req,res) =>{
    const getCli = await Clientes.find()
    res.json(getCli)
}

const addCli = async (req, res) =>{
    const addCli = new Clientes(req.body)
    try {
        const saveCli = await addCli.save()
        res.json(saveCli)
    } catch (error) {
        console.log(error.message); 
    }
}
const delCli = async (req, res) =>{
    try {
        await Clientes.deleteOne({ _id: req.params.id })
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(400)
        res.send({error: error.message})
    }
}

export const mongoCli= {
    getCli,
    addCli,
    delCli,
}