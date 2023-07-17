import express from "express";

import {
    mealPlan, createMealPlanForm
} from "../../controllers/mealPlan.js";

const router = express.Router();

// GET goals
router.get("/", mealPlan);
// create goal
router.post("/", createMealPlanForm);

export default router;