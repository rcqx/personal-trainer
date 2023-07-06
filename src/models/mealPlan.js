import mongoose from 'mongoose';

const MealPlanSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  planName: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
    required: true,
  },
  bodyComposition: {
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    bodyFat: { type: Number, required: true },
    lbm: { type: Number, required: true },
    bmi: { type: Number, required: true },
    waist: { type: Number, required: true },
    bodyType: { type: String, required: true },
  },
  fitnessGoal: {
    trainingFocus: { type: String, required: true },
    weight: { type: Number, required: true },
    bodyFat: { type: Number, required: true },
    frequency: { type: Number, required: true },
    lbm: { type: Number, required: true },
    bmi: { type: Number, required: true },
    flexibility: { type: Boolean, required: true },
    cardio: { type: Boolean, required: true },
  },
  excercisePlan: {
    planName: { type: String, required: true }
  },
  status: {
    type: String,
    required: true,
  }
});

const MealPlanModel = mongoose.model('mealPlanSchema', MealPlanSchema);

export default MealPlanModel;