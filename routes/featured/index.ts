import { Router } from "express";
import { createFeatured, getAllFeatured } from "../../controllers/featured";
import { adminRole, isAuthenticated } from "../../middleware/auth";

const router = Router();

router.post("/create", isAuthenticated, adminRole("admin"), createFeatured);
router.get("/get-data", getAllFeatured);

export default router;
