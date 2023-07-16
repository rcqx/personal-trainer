import FormModel from "../models/workoutForm.js";
import { v4 as uuidv4 } from "uuid";

export const getWorkout = async (req, res, next) => {
  try {
    const workouts = await FormModel.find({});
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addWorkout = async (req, res, next) => {
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
};
