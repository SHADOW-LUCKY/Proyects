import {Router} from 'express'
import {check} from 'express-validator'
import {methAsigPre as AsigPre} from '../controllers/asigpremios.controllers.js'
import equipos from '../models/equipos.js'
import premios from '../models/premios.js'
import asigpremios from '../models/asigpremios.js'
import validate from '../middlewares/validate.documents.js'
const router = Router()

router.get('/all', AsigPre.getAsigPre)
router.post('/add',[
    check('equipo').custom(
        async (equipo='')=>{
            const equipoExist = await equipos.findOne({name:equipo})
            if(!equipoExist){
               throw new Error(`el equipo: ${equipo} no existe en la base de datos`) 
            }
        }

    ),
    check('prize').custom(
        async (prize='')=>{
            const prizeExist = await premios.findOne({name:prize})
            if(!prizeExist){
               throw new Error(`el premio: ${prize} no existe en la base de datos`) 
            }
        }
    ),
    check('prize').custom(
        async (prize='')=>{
            const prizegot = await asigpremios.findOne({prize})
            if(prizegot){
               throw new Error(`el premio: ${prize} ya es de otro equipo`) 
            }
        }
    ),
    validate 
], AsigPre.postAsigPre)
router.delete('/del/:id', AsigPre.delAsigPre)

export default router
