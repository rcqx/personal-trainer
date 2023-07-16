import goalsModel from "../models/goals.js";
import { v4 as uuidv4 } from "uuid";

export const getGoals = async (req, res, next) => {
  try {
    const goals = await goalsModel.find({});
    res.status(200).json(goals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addGoal = async (req, res, next) => {
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
};
