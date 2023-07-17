import mongoose from "mongoose";

const MealPlanSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  formId: {
    type: String,
    required: true,
    unique: true,
  },
  response: {
    type: String,
    required: true,
  },
});

const MealPlanModel = mongoose.model("MealPlan", MealPlanSchema);
export default MealPlanModel;
