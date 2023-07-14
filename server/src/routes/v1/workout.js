import express from "express";

import {
    getWorkout, addWorkout
} from "../../controllers/workout.js";

const router = express.Router();

// GET goals
router.get("/", getWorkout);
// create goal
router.post("/", addWorkout);

export default router;