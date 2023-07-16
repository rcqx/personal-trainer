import express from "express";
const router = express.Router();

// Import route files
import bodyCompositionRoutes from './bodyComposition.js';
import goalRoutes from './goal.js';
import workoutRoutes from './workout.js';
import mealPlanRoutes from './mealPlan.js';


router.get("/", (req, res, next) => {
  res.json({ message: "hi" });
});

// Register route files
router.use('/body-composition', bodyCompositionRoutes);
router.use('/goal', goalRoutes);
router.use('/workout', workoutRoutes);
router.use('/mealplan', mealPlanRoutes);


export default router;
