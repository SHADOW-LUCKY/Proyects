import {Router} from 'express';
import {methodsCONS as controlCONS} from '../controllers/constructoras.controllers.js';

const router = Router();

router.get("/", controlCONS.getConstructoras);
router.post("/", controlCONS.addConstructoras);
/* ponemos el parametro id para que la funcion pueda buscar con el link */
router.get("/:id", controlCONS.GetConsID);
router.delete("/:id", controlCONS.DelConsID);
router.put("/:id", controlCONS.updateConstructoras);

export default router;