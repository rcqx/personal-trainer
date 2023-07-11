import WorkoutModel from "../models/workout.js";

class OpenAiController {
  constructor(service) {
    this.service = service;
  }

  generateText = async (req, res) => {
    const { prompt, maxTokens } = req.body;
    try {
      const generatedText = await this.service.generateText(prompt, maxTokens);
      const data = new WorkoutModel({
        responseTest: generatedText,
      });
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error ocurred. More info on response.data.error" });
    }
  };
}

export default OpenAiController;
