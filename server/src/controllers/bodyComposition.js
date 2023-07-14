import bodyCompositionModel from "../models/bodyComposition.js";
import { v4 as uuidv4 } from "uuid";

export const getAllCompostions = async (req, res) => {
  try {
    const items = await bodyCompositionModel.find({});
    res.status(200).json(items);
  } catch {
    res.status(400).json({ message: err.message });
  }
};

export const addBodyComposition = async (req, res) => {
  const data = new bodyCompositionModel({
    id: uuidv4(),
    age: req.body.age,
    weight: req.body.weight,
    height: req.body.height,
    bodyFat: req.body.bodyFat,
    lbm: req.body.lbm,
    bmi: req.body.bmi,
    waist: req.body.waist,
    bodytype: req.body.bodytype,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
