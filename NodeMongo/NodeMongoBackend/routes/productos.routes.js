import express from 'express';
import {mongoProc as Proc} from '../controllers/productos.controllers.js';

const router = express.Router();

router.get("/all",Proc.getProc);
router.post("/add",Proc.addProc);
router.delete("/del/:id",Proc.delProc);
/* router.patch("/upt/:id",Proc.uptProc); */

export default router;