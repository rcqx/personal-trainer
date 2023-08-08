import express from "express";

import {
    getGoals, addGoal, updateGoal, deleteFitnessGoal, getFitnessGoalById
} from "../../controllers/goal.js";

const router = express.Router();

// GET goals
router.get("/", getGoals);
router.get("/:_id", getFitnessGoalById);
// create goal
router.post("/new", addGoal);
router.put("/update", updateGoal);
router.delete("/delete/:_id", deleteFitnessGoal);

export default router;