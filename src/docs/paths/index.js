import { getBodyComposition, createBodyComposition } from "./bodyCompositionPaths.js";
import { getGoals, createGoal } from "./goalsPaths.js";
import { getWorkoutForm, createWorkoutForm } from "./workoutFormPaths.js";


const paths = {
  paths: {
    ...getBodyComposition,
    ...createBodyComposition,
    ...getGoals,
    ...createGoal,
    ...getWorkoutForm,
    ...createWorkoutForm
  },
};

export default paths;
