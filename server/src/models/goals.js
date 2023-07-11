import mongoose from "mongoose";

const goalsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  trainingFocus: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  bodyFat: {
    type: Number,
    required: true,
  },
  frequency: {
    type: Number,
    required: true,
  },
  lbm: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  flexibility: {
    type: Boolean,
  },
  cardio: {
    type: Boolean,
    required: true,
  }
});

const goalsModel = mongoose.model('goalsModel', goalsSchema);
export default goalsModel;
