import { getBodyComposition } from "./bodyCompositionPaths.js";
import { createBodyComposition } from "./bodyCompositionPaths.js";
const paths = {
  paths: {
    ...getBodyComposition,
    ...createBodyComposition
  },
};

export default paths;
