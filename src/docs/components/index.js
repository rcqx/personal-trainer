import bodyCompositionComponent from "./bodyCompositionComponent.js";
import Goals from "./goalsComponent.js";
import workoutFormComponent from "./workoutFormComponent.js";
import mealPlan from "./mealPlan.js";

const components = {
  components: {
    schemas: {
      ...bodyCompositionComponent,
      ...Goals,
      ...workoutFormComponent,
      ...mealPlan
    },
  },
};

export default components;
