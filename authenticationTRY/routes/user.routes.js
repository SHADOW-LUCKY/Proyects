import {Router} from 'express'
import {check} from 'express-validator'
import {methUser as user} from '../controllers/user.controllers.js'
import validate from '../middlewares/validate.documents.js';
import Role from '../models/role.js'
const router = Router()

router.get('/all', user.getUser)/* usamos la funcion para retornar una respuesta desde un endpoint*/
router.post('/add',[
    check('name','el nombre no es valido').not().isEmpty(),
    check('email','el correo no es valido').isEmail(),
    check('password','la contraseña no es valida').isLength({min:6,max:25}),
    check('role').custom(async (role= '') => {
        const roleExist = await Role.findOne({role})
        if(!roleExist){
            throw new Error(`el rol: ${role} no existe en la base de datos`)
        }
    }),
    validate
], user.postUser)
router.delete('/del/:id', user.delUser)
router.put('/put/:id', user.putUser)

export default router

