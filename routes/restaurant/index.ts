import { Router } from "express";
import { createResultant, getAllResultants } from "../../controllers/restaurants";
import { adminRole, isAuthenticated } from "../../middleware/auth";

const router = Router();

router.post("/create", isAuthenticated, adminRole("admin"), createResultant);
router.get("/resultants", isAuthenticated, getAllResultants);

export default router;
