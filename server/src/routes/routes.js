import express from "express";
import config from "../config/config.js";
import OpenAiProvider from "../providers/provider.js";
import OpenAiService from "../services/service.js";
import OpenAiController from "../controllers/controller.js";


// Controllers
import {
  getAllCompostions,
  addBodyComposition,
} from "../controllers/bodyComposition.js";
import { getGoals, addGoal } from "../controllers/goal.js";
import { getWorkout, addWorkout } from "../controllers/workout.js";
import { mealPlan, addMealPlan } from "../controllers/mealPlan.js";


const router = express.Router();
const provider = new OpenAiProvider(config.llm.model, config.llm.apikey);
const service = new OpenAiService(provider);
const controller = new OpenAiController(service);

// GET body compositions
router.get("/get-all-compositions", getAllCompostions);

// GET created goals
router.get("/get-all-goals", getGoals);

// Get created exercise plans
router.get("/get-exercise-forms", getWorkout);

router.post("/create-form", addWorkout);

// Meal Plan routes

router.get("/get-mealplan", mealPlan);

router.post("/create-mealplan", addMealPlan);

router.post("/body-composition", addBodyComposition);

router.post("/create-goals", addGoal);

// openai test endpoint
router.post("/generate-workout", controller.generateText);

router.post("/generate-mealplan", controller.generateText);

// GET ALL
router.get("/getAll", (req, res) => {
  res.json("Get ALL API");
});

// GET by ID
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

// UPDATE by ID
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

// DELETE by ID
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

export default router;
