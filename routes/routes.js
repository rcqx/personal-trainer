import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import OpenAiProvider from "../provider/provider.js";
import OpenAiService from "../services/service.js";
import OpenAiController from "../controllers/controller.js";
import FormModel from "../models/workoutForm.js";

const router = express.Router();
const provider = new OpenAiProvider(
  process.env.OPEN_AI_MODEL,
  process.env.OPEN_AI_KEY,
);
const service = new OpenAiService(provider);
const controller = new OpenAiController(service);

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

// TEST
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

// GET ALL
router.get('/getAll', (req, res) => {
  res.send('Get ALL API');
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