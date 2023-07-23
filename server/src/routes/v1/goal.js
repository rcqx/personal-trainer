import express from "express";

import {
    getGoals, addGoal, updateGoal
} from "../../controllers/goal.js";

const router = express.Router();

// GET goals
router.get("/", getGoals);
// create goal
router.post("/new", addGoal);
router.put("/update", updateGoal);

export default router;