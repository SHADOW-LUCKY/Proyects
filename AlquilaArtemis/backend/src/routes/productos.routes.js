import {Router} from 'express';
import {methodsPROC as controlPROC} from '../controllers/productos.controllers.js';

const router = Router();

router.get("/", controlPROC.getProductos);
router.post("/", controlPROC.addProductos);
router.get("/:id", controlPROC.GetProdID);
router.delete("/:id", controlPROC.DelProdID);
router.put("/:id", controlPROC.updateProductos);

export default router;