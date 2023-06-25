import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
  responseTest: {
    type: String,
    required: true,
  },
});

const PromptModel = mongoose.model("prompt", PromptSchema);
export default PromptModel;
