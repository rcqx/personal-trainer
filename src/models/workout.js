import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  responseTest: {
    type: String,
    required: true,
  },
});

const WorkoutModel = mongoose.model("Workout", WorkoutSchema);
export default WorkoutModel;
