import express from "express";
import config from "../config/config.js";
import { v4 as uuidv4 } from "uuid";
import OpenAiProvider from "../providers/provider.js";
import OpenAiService from "../services/service.js";
import OpenAiController from "../controllers/controller.js";
import FormModel from "../models/workoutForm.js";
import bodyCompositionModel from "../models/bodyComposition.js";
import goalsModel from "../models/goals.js";

const router = express.Router();
const provider = new OpenAiProvider(config.llm.model, config.llm.apikey);
const service = new OpenAiService(provider);
const controller = new OpenAiController(service);

/**
 * @swagger
 * components:
 *   schemas:
 *     Composition:
 *       type: object
 *       required:
 *         - id
 *         - age
 *         - weight
 *         - height
 *         - bodyFat
 *         - bodytype
 *       properties:
 *         id:
 *           type: string
 *           description: The composition's ID.
 *         age:
 *           type: integer
 *           minimum: 0
 *           description: The user's age.
 *         weight:
 *           type: integer
 *           description: The user's weigth.
 *         height:
 *           type: integer
 *           description: The user's height.
 *         bodyFat:
 *           type: integer
 *           description: The user's body fat.
 *         lbm:
 *           type: integer
 *           description: The user's lean body mass.
 *         bmi:
 *           type: integer
 *           description: The user's body mass index.
 *         waist:
 *           type: integer
 *           description: The user's waist.
 *         bodytype:
 *           type: string
 *           description: The user's body type.
 *       example:
 *         id: 123
 *         age: 30
 *         weight: 70
 *         height: 180
 *         bodyFat: 15
 *         lbm: 60
 *         bmi: 21
 *         waist: 80
 *         bodytype: Mesomorph
 */

/**
 * @swagger
 * /get-all-compositions:
 *   get:
 *     summary: Get all compositions
 *     description: Retrieve a list of all compositions.
 *     tags:
 *       - Compositions
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Composition'
 */
// GET body compositions
router.get("/get-all-compositions", (req, res) => {
  const getItems = async () => {
    const Items = await bodyCompositionModel.find({});
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Goals:
 *       type: object
 *       required:
 *         - id
 *         - trainingFocus
 *         - weight
 *         - bodyFat
 *         - frequency
 *         - cardio
 *       properties:
 *         id:
 *           type: string
 *           description: The composition's ID.
 *         trainingFocus:
 *           type: string
 *           description: The user's training focus.
 *         weight:
 *           type: integer
 *           description: The user's weight.
 *         bodyFat:
 *           type: integer
 *           description: The user's body fat.
 *         frequency:
 *           type: integer
 *           description: The exercise frequency.
 *         lbm:
 *           type: integer
 *           description: The user's lbm.
 *         bmi:
 *           type: integer
 *           description: The user's bmi.
 *         flexibility:
 *           type: boolean
 *           description: The user's flexibility.
 *         cardio:
 *           type: boolean
 *           description: The user's cardio.
 *       example:
 *         id: 123
 *         trainingFocus: Hypertrophy
 *         weight: 70
 *         bodyFat: 15
 *         frequency: 3
 *         lbm: 60
 *         bmi: 21
 *         flexibility: true
 *         cardio: true
 */

/**
 * @swagger
 * /get-all-goals:
 *   get:
 *     summary: Get all compositions
 *     description: Retrieve a list of all compositions.
 *     tags:
 *       - Goals
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Goals'
 */
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

router.post("/body-composition", async (req, res) => {
  const data = new bodyCompositionModel({
    id: uuidv4(),
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height,
    bodyFat: req.body.bodyFat,
    lbm: req.body.lbm,
    bmi: req.body.bmi,
    waist: req.body.waist,
    bodytype: req.body.bodytype,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
