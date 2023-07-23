import goalsModel from "../models/goals.js";
import { v4 as uuidv4 } from "uuid";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const getGoals = catchAsyncErrors(async (req, res, next) => {
  const goals = await goalsModel.find({});
  res.status(200).json(goals);
});

export const addGoal = catchAsyncErrors(async (req, res, next) => {
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

  const dataToSave = await data.save();
  res.status(201).json(dataToSave);
});
