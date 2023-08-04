import express from "express";

import {
    getGoals, addGoal, updateGoal, deleteFitnessGoal
} from "../../controllers/goal.js";

const router = express.Router();

// GET goals
router.get("/", getGoals);
// create goal
router.post("/new", addGoal);
router.put("/update", updateGoal);
router.delete("/delete", deleteFitnessGoal);

export default router;