import express from 'express';
import { mongoEquipos as Equipos} from '../controllers/equipos.controllers.js';

const router = express.Router();

router.get("/all", Equipos.getEquipos);
router.post("/add", Equipos.addEquipos);
router.delete("/del/:id", Equipos.delEquipos);
router.patch("/upt/:id", Equipos.uptEquipos);

export default router;