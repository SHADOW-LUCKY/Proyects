import Producto from '../models/productos.js'

const getProc = async (req,res) =>{
    const getProc = await Producto.find()
    res.json(getProc)
}

const addProc = async (req, res) =>{
    const addProc = new Producto(req.body)
    try {
        const saveProc = await addProc.save()
        res.json(saveProc)
    } catch (error) {
        console.log(error.message); 
    }
}

const delProc = async (req, res) =>{
    try {
        await Producto.deleteOne({ _id: req.params.id })
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(400)
        res.send({error: error.message})
    }
}

export const mongoProc= {
    getProc,
    addProc,
    delProc
}