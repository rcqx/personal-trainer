import { API } from "./apiConfig";

export const getMealPlan = async () => {
  return await API.get("/get-all-mealplans");
};

export const createMealPlan = async (formData) => {
  return await API.post("/create-mealplan", formData);
};
