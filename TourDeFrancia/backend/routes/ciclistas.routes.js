import express from 'express';
import {mongoCiclistas as Ciclistas} from '../controllers/ciclistas.controllers.js';

const router = express.Router();

router.get("/all",Ciclistas.getCiclista);
router.post("/add",Ciclistas.addCiclista);
router.delete("/del/:id", Ciclistas.delCiclista);
router.patch("/upt/:id", Ciclistas.uptCiclista);

export default router;