import { Router } from "express";
import { createDish } from "../../controllers/dish";
import { adminRole, isAuthenticated } from "../../middleware/auth";

const router = Router();

router.post("/create", isAuthenticated, adminRole("admin"), createDish);

export default router;
