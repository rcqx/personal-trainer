import { API } from "./apiConfig";

export const getGoals = async () => {
  return await API.get("/get-all-goals");
};
