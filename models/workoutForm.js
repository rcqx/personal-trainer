const mongoose = require('mongoose');
const FormSchema = new mongoose.Schema({
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
    leanBodyMass: { type: Number, required: true },
    waist: { type: Number, required: true },
    bodyType: { type: String, required: true },
  },
  fitnessGoal: {
    trainingFocus: { type: String, required: true },
    weight: { type: Number, required: true },
    bodyFat: { type: Number, required: true },
    frequency: { type: Number, required: true },
    trainingType: { type: String, required: true },
    intensityLevel: { type: String, required: true },
    mobility: { type: Boolean, required: true },
    cardio: { type: Boolean, required: true },
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('workoutForm', FormSchema);
