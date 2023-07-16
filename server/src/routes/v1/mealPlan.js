import express from "express";

import {
    mealPlan, addMealPlan
} from "../../controllers/mealPlan.js";

const router = express.Router();

// GET goals
router.get("/", mealPlan);
// create goal
router.post("/", addMealPlan);

export default router;