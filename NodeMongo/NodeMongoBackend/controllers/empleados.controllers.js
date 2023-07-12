import Empleado from "../models/empleados.js"

const getEmp = async (req,res) =>{
    const getEmp = await Empleado.find()
    res.json(getEmp)
    console.log(getEmp);
}

const addEmp = async (req, res) =>{
    const addEmp = new Empleado(req.body)
    try {
        const saveEmp = await addEmp.save()
        res.json(saveEmp)
    } catch (error) {
        console.log(error.message); 
    }
}

const delEmp = async (req, res) =>{
    try {
        await Empleado.deleteOne({ _id: req.params.id })
        res.json({ message: 'Empleado eliminado' });
    } catch (error) {
        res.status(400)
        res.send({error: error.message})
    }
}

export const mongoEmp= {
    getEmp,
    addEmp,
    delEmp,
}