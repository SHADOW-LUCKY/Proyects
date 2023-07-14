import express from 'express';
import {mongoEtapas as Etapas} from '../controllers/etapas.controllers.js';

const router = express.Router();

router.get("/all", Etapas.getEtapas);
router.post("/add", Etapas.addEtapas);
router.delete("/del/:id", Etapas.delEtapas);
router.patch("/upt/:id", Etapas.uptEtapas);

export default router;
