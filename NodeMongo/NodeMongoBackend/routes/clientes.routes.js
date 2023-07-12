import express from 'express';
import {mongoCli as Cli} from '../controllers/clientes.controllers.js';

const router = express.Router();

router.get("/all",Cli.getCli);
router.post("/add",Cli.addCli);
router.delete("/del/:id",Cli.delCli);
/* router.patch("/upt/:id",Cli.uptCli); */    

export default router;