import express from 'express';
import {mongoEmp as Emp} from '../controllers/empleados.controllers.js';

const router = express.Router();

router.get("/all",Emp.getEmp);
router.post("/add",Emp.addEmp);
router.delete("/del/:id",Emp.delEmp);
/* router.patch("/upt/:id",Emp.uptEmp); */

export default router;
