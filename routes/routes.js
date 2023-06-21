const express = require("express");
const router = express.Router();
const Model = require('../models/model');
const FormModel = require('../models/workoutForm');

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
router.post('/create-workout', async (req, res) => {
  const data = new FormModel({
    name: req.body.name,
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

module.exports = router;