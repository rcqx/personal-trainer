import { getBodyComposition, createBodyComposition } from "./bodyCompositionPaths.js";
import { getGoals, createGoal } from "./goalsPaths.js";
const paths = {
  paths: {
    ...getBodyComposition,
    ...createBodyComposition,
    ...getGoals,
    ...createGoal
  },
};

export default paths;
