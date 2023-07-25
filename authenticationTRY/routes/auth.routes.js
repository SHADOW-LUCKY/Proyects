import {Router} from 'express';
import {check} from 'express-validator';
import {auth} from '../controllers/auth.controllers.js'
import validate from '../middlewares/validate.documents.js'
const router = Router()

router.post('/login',[
    check('email','el correo no es valido').isEmail(),
    check('password','la contraseña no es valida').not().isEmpty(),
    validate
],auth.login)

export default router