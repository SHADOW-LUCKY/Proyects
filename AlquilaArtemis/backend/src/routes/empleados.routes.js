import {Router} from 'express';
import {methodsEMP as controlEMP} from '../controllers/empleados.controllers.js';

const router = Router();

router.get("/", controlEMP.getEmpleados);
router.post("/", controlEMP.addEmpleados);
router.get("/:id", controlEMP.GetEmpID);
router.delete("/:id", controlEMP.DelEmpID);
router.put("/:id", controlEMP.updateEmpleados);

export default router;