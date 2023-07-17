import MealPlanFormModel from "../models/mealPlanForm.js";
import { v4 as uuidv4 } from "uuid";

export const mealPlan = async (req, res) => {
  try {
    const mealPlans = await MealPlanFormModel.find({});
    res.status(200).json(mealPlans);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createMealPlanForm = async (req, res) => {
  const data = new MealPlanFormModel({
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
    console.log(error.response.data);
    res.status(400).json({ message: error.message });
  }
};
