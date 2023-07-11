import { API } from "./apiConfig";

export const getWorkOutForm = async () => {
  return await API.get("/get-exercise-forms");
};

export const createWorkouttForm = async (formData) => {
  return await API.post("/create-form", formData);
};

export const generateWorkout = async (formData) => {
  return await API.post("/generate-workout", formData);
};
