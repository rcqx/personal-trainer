import express from "express";
import config from "../config/config.js";
import { v4 as uuidv4 } from "uuid";
import OpenAiProvider from "../providers/provider.js";
import OpenAiService from "../services/service.js";
import OpenAiController from "../controllers/controller.js";
import FormModel from "../models/workoutForm.js";
import bodyCompositionModel from "../models/bodyComposition.js";
import goalsModel from "../models/goals.js";
import MealPlanModel from "../models/mealPlan.js";

// Controllers
import {
  getAllCompostions,
  addBodyComposition,
} from "../controllers/bodyComposition.js";

const router = express.Router();
const provider = new OpenAiProvider(config.llm.model, config.llm.apikey);
const service = new OpenAiService(provider);
const controller = new OpenAiController(service);

// GET body compositions
router.get("/get-all-compositions", getAllCompostions);

// GET created goals
router.get("/get-all-goals", (req, res) => {
  const getItems = async () => {
    const Items = await goalsModel.find({});
    return Items;
  };
  getItems()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

// Get created exercise plans
router.get("/get-exercise-forms", (req, res) => {
  const getItems = async () => {
    const Items = await FormModel.find({});
    return Items;
  };
  getItems()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

router.post("/create-form", async (req, res) => {
  const data = new FormModel({
    id: uuidv4(),
    planName: req.body.planName,
    objective: req.body.objective,
    bodyComposition: req.body.bodyComposition,
    fitnessGoal: req.body.fitnessGoal,
    status: req.body.status,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Meal Plan routes

router.get("/get-mealplan", (req, res) => {
  const getItems = async () => {
    const Items = await MealPlanModel.find({});
    return Items;
  };
  getItems()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

router.post("/create-mealplan", async (req, res) => {
  const data = new MealPlanModel({
    id: uuidv4(),
    planName: req.body.planName,
    objective: req.body.objective,
    bodyComposition: req.body.bodyComposition,
    fitnessGoal: req.body.fitnessGoal,
    excercisePlan: req.body.excercisePlan,
    status: req.body.status,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/body-composition", addBodyComposition);

router.post("/create-goals", async (req, res) => {
  const data = new goalsModel({
    id: uuidv4(),
    trainingFocus: req.body.trainingFocus,
    weight: req.body.weight,
    bodyFat: req.body.bodyFat,
    frequency: req.body.frequency,
    lbm: req.body.lbm,
    bmi: req.body.bmi,
    flexibility: req.body.flexibility,
    cardio: req.body.cardio,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
