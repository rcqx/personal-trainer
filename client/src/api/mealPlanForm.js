import { API } from "./apiConfig";

export const createMealPlanForm = async (formData) => {
  return await API.post("/create-mealplan-form", formData);
};

export const createMealPlan = async (formData) => {
  return await API.post("/create-mealplan", formData);
};
