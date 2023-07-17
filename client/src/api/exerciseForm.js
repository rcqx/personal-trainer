import { API } from "./apiConfig";

export const getWorkOutForm = async () => {
  return await API.get("/get-exercise-forms");
};

export const createWorkouttForm = async (formData) => {
  return await API.post("/create-form", formData);
};

export const createWorkout = async (formData) => {
  return await API.post("/create-workout", formData);
};
