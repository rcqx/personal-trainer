import mongoose from "mongoose";

const bodyCompositionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  bodyFat: {
    type: Number,
    required: true,
  },
  lbm: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  waist: {
    type: Number,
  },
  bodytype: {
    type: String,
    required: true,
  }
});

const bodyCompositionModel = mongoose.model('inputModel', bodyCompositionSchema);
export default bodyCompositionModel;
