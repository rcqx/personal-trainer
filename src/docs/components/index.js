import bodyCompositionComponent from "./bodyCompositionComponent.js";
import Goals from "./goalsComponent.js";

const components = {
  components: {
    schemas: {
      ...bodyCompositionComponent,
      ...Goals
    },
  },
};

export default components;
