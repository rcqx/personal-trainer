import FormModel from "../models/workoutForm.js";
import { v4 as uuidv4 } from "uuid";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const getWorkout = catchAsyncErrors(async (req, res, next) => {
  const workouts = await FormModel.find({});
  res.status(200).json(workouts);
});

export const createWorkoutForm = catchAsyncErrors(async (req, res, next) => {
  const data = new FormModel({
    id: uuidv4(),
    planName: req.body.planName,
    objective: req.body.objective,
    bodyComposition: req.body.bodyComposition,
    fitnessGoal: req.body.fitnessGoal,
    status: req.body.status,
  });

  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
});
