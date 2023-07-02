import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
  responseTest: {
    type: String,
    required: true,
  },
});

const WorkoutModel = mongoose.model("Workout", WorkoutSchema);
export default WorkoutModel;
