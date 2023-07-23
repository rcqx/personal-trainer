import bodyCompositionModel from "../models/bodyComposition.js";
import { v4 as uuidv4 } from "uuid";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import BaseError from '../utils/baseError.js';

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
  res.status(201).json(dataToSave);
});

export const updateBodyComposition = catchAsyncErrors(
  async (req, res, next) => {
    const { _id } = req.body;
    const bodyComposition = await bodyCompositionModel.findOne({ _id });

    if (bodyComposition.length === 0) {
      return next(new BaseError('Body composition not found', 404))
    }

    const { age, weight, height, bodyFat, lbm, bmi, waist, bodyType } = req.body;
    if(age) bodyComposition.age = age;
    if(weight) bodyComposition.weight = weight;
    if(height) bodyComposition.height = height;
    if(bodyFat) bodyComposition.bodyFat = bodyFat;
    if(lbm) bodyComposition.lbm = lbm;
    if(bmi) bodyComposition.bmi = bmi;
    if(waist) bodyComposition.waist = waist;
    if(bodyType) bodyComposition.bodyType = bodyType;

     // Save the updated body composition
     const updateBodyComposition =  await bodyComposition.save();
     res.status(200).json({ message: 'Body composition updated successfully', updateBodyComposition });
  }
);
