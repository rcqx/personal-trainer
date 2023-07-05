import bodyCompositionComponent from "./bodyCompositionComponent.js";
import Goals from "./goalsComponent.js";
import workoutFormComponent from "./workoutFormComponent.js";

const components = {
  components: {
    schemas: {
      ...bodyCompositionComponent,
      ...Goals,
      ...workoutFormComponent
    },
  },
};

export default components;
