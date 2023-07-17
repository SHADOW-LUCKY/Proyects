import usuario from '../models/user.js';
const getUser = async (req, res) => {
   const user = await usuario.find() 
   res.json(user)
}

const postUser = async (req, res) => {
   const user = new usuario(req.body)
   try {
      const userSave = await user.save()
      res.json(userSave)
   } catch (error) {
      res.status(400)
      res.send({ error: error.message })
   }
}

const delUser = async (req, res) => {
   try {
      await usuario.deleteOne({ _id: req.params.id })
      res.json({ message: 'usuario eliminado' })
   } catch (error) {
      res.status(400)
      res.send({ error: error.message })
   }
}

const putUser = async (req, res) => {
 try {
    let uptuser = await usuario.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    res.json(uptuser)
 } catch (error) {
    res.status(400)
    res.send({ error: error.message })
 }
}

export const methUser = {
    getUser,
    postUser,
    delUser,
    putUser
}