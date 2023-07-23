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

export const updateGoal = catchAsyncErrors(
  async (req, res, next) => {
    const { _id } = req.body;
    const goal = await goalsModel.findOne({ _id });

    if (goal.length === 0) {
      return next(new BaseError('Goal not found', 404))
    }

    const { trainingFocus, weight, bodyFat, frequency, lbm, bmi, flexibility, cardio } = req.body;
    if(trainingFocus) goal.trainingFocus = trainingFocus;
    if(weight) goal.weight = weight;
    if(bodyFat) goal.bodyFat = bodyFat;
    if(frequency) goal.frequency = frequency;
    if(lbm) goal.lbm = lbm;
    if(bmi) goal.bmi = bmi;
    if(flexibility) goal.flexibility = flexibility;
    if(typeof cardio === "boolean") goal.cardio = cardio;

     // Save the updated body composition
     const updatedGoal =  await goal.save();
     res.status(200).json({ message: 'Fitness Goal updated successfully', updatedGoal });
  }
);
