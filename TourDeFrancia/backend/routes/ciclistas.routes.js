import express from 'express';
import {mongoCiclistas as Ciclistas} from '../controllers/ciclistas.controllers.js';

const router = express.Router();

router.get("/all", Ciclistas.getCiclistas);
router.post("/add", Ciclistas.addCiclistas);
router.delete("/del/:id", Ciclistas.delCiclistas);
router.patch("/upt/:id", Ciclistas.uptCiclistas);

export default router;