import {Router} from "express"
import {methodsCOTI as controlCOTI} from "../controllers/cotizaciones.controllers.js";
const router = Router();
router.get("/", controlCOTI.getCotizaciones);
router.post("/", controlCOTI.addCotizaciones);
router.get("/:id", controlCOTI.getCotiID);
router.delete("/:id", controlCOTI.DelCotiID);
router.put("/:id", controlCOTI.updateCotizaciones);
export default router;