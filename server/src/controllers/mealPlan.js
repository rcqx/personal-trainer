import MealPlanModel from "../models/mealPlan.js";
import { v4 as uuidv4 } from "uuid";

export const mealPlan = async (req, res, next) => {
  try {
    const mealPlans = await MealPlanModel.find({});
    res.status(200).json(mealPlans);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addMealPlan = async (req, res, next) => {
  const data = new MealPlanModel({
    id: uuidv4(),
    planName: req.body.planName,
    objective: req.body.objective,
    bodyComposition: req.body.bodyComposition,
    fitnessGoal: req.body.fitnessGoal,
    excercisePlan: req.body.excercisePlan,
    status: req.body.status,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
