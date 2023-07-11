import express from 'express';
import {mongoCate as Cate} from '../controllers/categorias.controller.js';

const router = express.Router();

router.get("/all",Cate.getCategorias);
router.post("/add",Cate.addCategorias);
router.delete("/del/:id",Cate.delCategorias);
router.patch("/upt/:id",Cate.uptCategorias);


export default router;

