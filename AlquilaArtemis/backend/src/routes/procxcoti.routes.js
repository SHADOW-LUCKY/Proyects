/* las llaves son usadas si el exposrt no es default */
import {Router} from 'express';
import {methodsProcxcoti as controlProcxcoti} from '../controllers/procxcoti.controllers.js';
/* guardamos router en una variable router */
const router = Router();
/* el router nunca manda nada solo enruta a las funciones de la carpeta controladores */
router.get("/", controlProcxcoti.getProcxcoti);
router.post("/", controlProcxcoti.addProcxcoti);
/* ponemos el parametro id para que la funcion pueda buscar con el link */
router.get("/:id", controlProcxcoti.GetProcxcotiID);
router.delete("/:id", controlProcxcoti.DelProcxcotiID);
router.put("/:id", controlProcxcoti.updateProcxcoti);

export default router