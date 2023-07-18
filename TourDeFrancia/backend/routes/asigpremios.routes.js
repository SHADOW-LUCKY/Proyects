import {Router} from 'express'
import {check} from 'express-validator'
import {methAsigPre as AsigPre} from '../controllers/asigpremios.controllers.js'

const router = Router()

router.get('/all', AsigPre.getAsigPre)
router.post('/add',[
    check('equipo').custom(async (equipo= '') => {
        const equipoExist = await AsigPre.findOne({equipo})
        if(!equipoExist){
            throw new Error(`el equipo: ${equipo} no existe en la base de datos`)
        }
    })
    check('prize').custom(async (prize= '') => {
        const prizeExist = await AsigPre.findOne({prize})
        if(!prizeExist){
            throw new Error(`el prize: ${prize} no existe en la base de datos`)
        }
    })
])
router.delete('/del/:id', AsigPre.delAsigPre)

export default router
