import express from 'express';
import config from '../config/config.js';
import { v4 as uuidv4 } from 'uuid';
import OpenAiProvider from "../providers/provider.js";
import OpenAiService from "../services/service.js";
import OpenAiController from "../controllers/controller.js";
import FormModel from "../models/workoutForm.js";
import bodyCompositionModel from '../models/bodyComposition.js';
import goalsModel from '../models/goals.js';

const router = express.Router();
const provider = new OpenAiProvider(
  config.llm.model,
  config.llm.apikey,
);
const service = new OpenAiService(provider);
const controller = new OpenAiController(service);


//GET body compositions
router.get('/getAllCompositions', (req, res) => {
  const getItems = async () => {
    const Items = await bodyCompositionModel.find({});
    return Items;
  };
  getItems().then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(400).json({ message: err.message });
  });
});

// POST
router.post('/post', async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/create-form', async (req, res) => {
  const data = new FormModel({
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

router.post('/body-composition', async (req, res) => {
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

router.post('/goals', async (req, res) => {
  const data = new goalsModel({
    trainningFocus: req.body.trainningFocus,
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

// GET ALL
router.get('/getAll', (req, res) => {
  res.json('Get ALL API');
});

// GET by ID
router.get('/getOne/:id', (req, res) => {
  res.send(req.params.id);
});

// UPDATE by ID
router.patch('/update/:id', (req, res) => {
  res.send('Update by ID API');
});

// DELETE by ID
router.delete('/delete/:id', (req, res) => {
  res.send('Delete by ID API');
});

// openai test endpoint
router.post('/generate-text', controller.generateText);

export default router;