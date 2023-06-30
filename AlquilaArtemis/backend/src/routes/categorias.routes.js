/* las llaves son usadas si el exposrt no es default */
import {Router} from 'express';
import {methodsCATE as controlCATE} from '../controllers/categorias.controllers.js';
/* guardamos router en una variable router */
const router = Router();
/* el router nunca manda nada solo enruta a las funciones de la carpeta controladores */
router.get("/", controlCATE.getCategorias);
router.post("/", controlCATE.addCategorias);
/* ponemos el parametro id para que la funcion pueda buscar con el link */
router.get("/:id", controlCATE.GetCateID);
router.delete("/:id", controlCATE.DelCateID);
router.put("/:id", controlCATE.updateCategorias);


export default router;