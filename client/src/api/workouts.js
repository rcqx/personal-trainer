import { API } from "./apiConfig";

export const getWorkouts = async () => {
  return await API.get("/get-all-workouts");
};
