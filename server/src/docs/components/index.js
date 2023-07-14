import bodyComposition from "./bodyComposition.js";
import Goals from "./goalsComponent.js";
import workoutFormComponent from "./workoutFormComponent.js";
import mealPlan from "./mealPlan.js";

const components = {
  components: {
    schemas: {
      ...bodyComposition,
      ...Goals,
      ...workoutFormComponent,
      ...mealPlan
    },
  },
};

export default components;
