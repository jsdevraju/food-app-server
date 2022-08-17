import { Router } from "express";
import { createFeatured, getAllFeatured } from "../../controllers/featured";
import { adminRole, isAuthenticated } from "../../middleware/auth";
import { createValidator } from "express-joi-validation";
import Joi from "joi";

const router = Router();
const validator = createValidator({});

const featuredSchema = Joi.object({
  name: Joi.string().min(20).max(100).required(),
  short_description: Joi.string().min(50).max(250).required(),
  restaurants: Joi.array(),
});

router.post(
  "/create",
  validator.body(featuredSchema),
  isAuthenticated,
  adminRole("admin"),
  createFeatured
);
router.get("/get-data", getAllFeatured);

export default router;
