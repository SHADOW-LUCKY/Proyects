import usuario from '../models/user.js';
import bcrypt from 'bcryptjs';
const getUser = async (req, res) => {
   const user = await usuario.find() 
   res.json(user)
}

const postUser = async (req, res) => {
   /*destructurar los datos */
   const { name, email, password, role } = req.body
   const user = new usuario({ name, email, password, role })
   /* verficar que el correo no exista(duplicado) */
   const emailExist = await usuario.findOne({ email })
   /* condicion de que el correo no exista */
   if (emailExist) {
      return res.status(400).json({ 
         error: 'el correo ya existe' 
      })   
   }
   /* encriptar la contraseña */
   const salt = await bcrypt.genSalt()/* algoritmo de encriptacion */
   user.password = await bcrypt.hashSync(password, salt)/* aplicamos el algoritmo de encriptacion a la contraseña */

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