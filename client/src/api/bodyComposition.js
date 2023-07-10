import { API } from "./apiConfig";

export const getBodyComposition = async () => {
  return await API.get("/get-all-compositions");
};
