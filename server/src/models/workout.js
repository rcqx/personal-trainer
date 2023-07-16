import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
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

const WorkoutModel = mongoose.model("Workout", WorkoutSchema);
export default WorkoutModel;
