import { API } from "./apiConfig";

export const getMealPlan = async () => {
  return await API.get("/get-all-mealplans");
};
