import bodyCompositionModel from "../models/bodyComposition.js";
import { v4 as uuidv4 } from "uuid";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const getAllCompostions = catchAsyncErrors(async (req, res) => {
  const items = await bodyCompositionModel.find({});
  res.status(200).json(items);
});

export const addBodyComposition = catchAsyncErrors(async (req, res) => {
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

  const dataToSave = await data.save();
  res.status(200).json(dataToSave);
});
