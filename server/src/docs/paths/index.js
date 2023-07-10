import { getBodyComposition, createBodyComposition } from "./bodyCompositionPaths.js";
import { getGoals, createGoal } from "./goalsPaths.js";
import { getWorkoutForm, createWorkoutForm } from "./workoutFormPaths.js";
import { getMealPlan, createMealPlan } from "./mealPlan.js";


const paths = {
  paths: {
    ...getBodyComposition,
    ...createBodyComposition,
    ...getGoals,
    ...createGoal,
    ...getWorkoutForm,
    ...createWorkoutForm,
    ...getMealPlan,
    ...createMealPlan
  },
};

export default paths;
