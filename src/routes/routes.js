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
 * tags:
 *   - name: Body Composition
 *     description: Operations related to body composition
 * components:
 *   schemas:
 *     BodyComposition:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The body composition's ID.
 *           example: "123"
 *         age:
 *           type: number
 *           description: The user's age.
 *           example: 30
 *         weight:
 *           type: number
 *           description: The user's weight.
 *           example: 70
 *         height:
 *           type: number
 *           description: The user's height.
 *           example: 180
 *         bodyFat:
 *           type: number
 *           description: The user's body fat.
 *           example: 15
 *         lbm:
 *           type: number
 *           description: The user's lean body mass.
 *         bmi:
 *           type: number
 *           description: The user's body mass index.
 *         waist:
 *           type: number
 *           description: The user's waist measurement.
 *         bodytype:
 *           type: string
 *           description: The user's body type.
 *           example: "Mesomorph"
 *       required:
 *         - id
 *         - age
 *         - weight
 *         - height
 *         - bodyFat
 *         - bodytype
 */

/**
 * @swagger
   * /api/get-all-compositions:
 *   get:
 *     summary: Get all compositions
 *     description: Retrieve a list of all compositions.
 *     tags:
 *       - Body Composition
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BodyComposition'
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
 * tags:
 *   - name: Goals
 *     description: Operations related to goals
 *
 * components:
 *   schemas:
 *     Goals:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The goal's ID.
 *           example: "123"
 *         trainingFocus:
 *           type: string
 *           description: The training focus.
 *           example: "Strength Training"
 *         weight:
 *           type: number
 *           description: The desired weight.
 *           example: 70
 *         bodyFat:
 *           type: number
 *           description: The desired body fat percentage.
 *           example: 15
 *         frequency:
 *           type: number
 *           description: The exercise frequency.
 *           example: 5
 *         lbm:
 *           type: number
 *           description: The lean body mass.
 *         bmi:
 *           type: number
 *           description: The body mass index.
 *         flexibility:
 *           type: boolean
 *           description: Indicates if flexibility training is included.
 *         cardio:
 *           type: boolean
 *           description: Indicates if cardio training is included.
 *           example: true
 *       required:
 *         - id
 *         - trainingFocus
 *         - weight
 *         - bodyFat
 *         - frequency
 *         - cardio
 */

/**
 * @swagger
 * /api/get-all-goals:
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

/**
 * @swagger
 * components:
 *   schemas:
 *     Form:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The form's ID.
 *           unique: true
 *           example: "123"
 *         planName:
 *           type: string
 *           description: The plan name.
 *           example: "Weight Loss"
 *         objective:
 *           type: string
 *           description: The objective of the form.
 *           example: "Lose weight and build muscle"
 *         bodyComposition:
 *           type: object
 *           properties:
 *             age:
 *               type: number
 *               description: The user's age.
 *               example: 30
 *             weight:
 *               type: number
 *               description: The user's weight.
 *               example: 70
 *             height:
 *               type: number
 *               description: The user's height.
 *               example: 180
 *             bodyFat:
 *               type: number
 *               description: The user's body fat percentage.
 *               example: 15
 *             lbm:
 *               type: number
 *               description: The user's lean body mass.
 *               example: 60
 *             bmi:
 *               type: number
 *               description: The user's bmi.
 *               example: 60
 *             waist:
 *               type: number
 *               description: The user's waist measurement.
 *               example: 80
 *             bodyType:
 *               type: string
 *               description: The user's body type.
 *               example: "Mesomorph"
 *           example:
 *             age: 30
 *             weight: 70
 *             height: 180
 *             bodyFat: 15
 *             lbm: 60
 *             bmi: 60
 *             waist: 80
 *             bodyType: "Mesomorph"
 *         fitnessGoal:
 *           type: object
 *           properties:
 *             trainingFocus:
 *               type: string
 *               description: The user's training focus.
 *               example: "Strength training"
 *             weight:
 *               type: number
 *               description: The user's weight goal.
 *               example: 65
 *             bodyFat:
 *               type: number
 *               description: The user's body fat goal.
 *               example: 12
 *             frequency:
 *               type: number
 *               description: The exercise frequency per week.
 *               example: 4
 *             lbm:
 *               type: number
 *               description: The user's lean body mass.
 *               example: 60
 *             bmi:
 *               type: number
 *               description: The user's bmi.
 *               example: 60
 *             flexibility:
 *               type: boolean
 *               description: Indicates flexibility.
 *               example: true
 *             cardio:
 *               type: boolean
 *               description: Indicates if cardio exercises are included.
 *               example: true
 *           example:
 *             trainingFocus: "Strength training"
 *             weight: 65
 *             bodyFat: 12
 *             frequency: 4
 *             lbm: 60
 *             bmi: 60
 *             flexibility: true
 *             trainingType: "Resistance training"
 *             intensityLevel: "Moderate"
 *             mobility: true
 *             cardio: true
 *         status:
 *           type: string
 *           description: The status of the form.
 *           example: "Pending"
 */
/**
 * @swagger
 * /api/get-exercise-forms:
 *   get:
 *     summary: Get all forms
 *     description: Retrieve a list of all forms.
 *     tags:
 *       - Workout Form
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Form'
 */
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

/**
 * @swagger
 * /api/create-form:
 *   post:
 *     summary: Create form
 *     description: Create form.
 *     tags:
 *       - Workout Form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Form'
 *     responses:
 *       '200':
 *         description: Form created successfully
 *         content:
 *           application/json:
 *             schema:
*                 $ref: '#/components/schemas/Form'
 */
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

/**
 * @swagger
 * /api/body-composition:
 *   post:
 *     summary: Create Body Composition.
 *     description: Create Body Composition.
 *     tags:
 *       - Body Composition
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BodyComposition'
 *     responses:
 *       '200':
 *         description: Form created successfully
 *         content:
 *           application/json:
 *             schema:
*                 $ref: '#/components/schemas/BodyComposition'
 */

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

/**
 * @swagger
 * /api/create-goals:
 *   post:
 *     summary: Create Body Composition.
 *     description: Create Body Composition.
 *     tags:
 *       - Goals
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Goals'
 *     responses:
 *       '200':
 *         description: Form created successfully
 *         content:
 *           application/json:
 *             schema:
*                 $ref: '#/components/schemas/Goals'
 */
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
