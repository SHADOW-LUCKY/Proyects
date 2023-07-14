import express from 'express';
import {mongoPremios as Premios} from '../controllers/premios.controllers.js';

const router = express.Router();

router.get("/all", Premios.getPremios);
router.post("/add", Premios.addPremios);
router.delete("/del/:id", Premios.delPremios);
router.patch("/upt/:id", Premios.uptPremios);

export default router;
