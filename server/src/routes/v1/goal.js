import express from "express";

import {
    getGoals, addGoal
} from "../../controllers/goal.js";

const router = express.Router();

// GET goals
router.get("/", getGoals);
// create goal
router.post("/", addGoal);

export default router;