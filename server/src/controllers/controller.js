import WorkoutModel from "../models/workout.js";
import MealPlanModel from "../models/meal.js";
import { v4 as uuidv4 } from "uuid";

class OpenAiController {
  constructor(service) {
    this.service = service;
  }

  generateText = async (req, res) => {
    const { formId, prompt, maxTokens } = req.body;
    try {
      const generatedText = await this.service.generateText(prompt, maxTokens);
      const data = new WorkoutModel({
        id: uuidv4(),
        formId,
        response: generatedText,
      });
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error ocurred. More info on response.data.error" });
    }
  };

  generateMeal = async (req, res) => {
    const { formId, prompt, maxTokens } = req.body;
    try {
      const generatedText = await this.service.generateText(prompt, maxTokens);
      const data = new MealPlanModel({
        id: uuidv4(),
        formId,
        response: generatedText,
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
