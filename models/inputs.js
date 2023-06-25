import mongoose from "mongoose";

const InputSchema = new mongoose.Schema({
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

const InputModel = mongoose.model('inputModel', InputSchema);
export default InputModel;
