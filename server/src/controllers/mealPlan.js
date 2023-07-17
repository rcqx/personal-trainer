import MealPlanFormModel from "../models/mealPlanForm.js";
import { v4 as uuidv4 } from "uuid";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const mealPlan = catchAsyncErrors(async (req, res) => {
  const mealPlans = await MealPlanFormModel.find({});
  res.status(200).json(mealPlans);
});

export const createMealPlanForm = catchAsyncErrors(async (req, res) => {
  const data = new MealPlanFormModel({
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
