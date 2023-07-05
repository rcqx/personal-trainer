import basicInfo from "./basicInfo.js";
import serverInfo from "./serverInfo.js";
import tags from "./tags.js";
import components from "./components.js";


const docs = {
  ...basicInfo,
  ...serverInfo,
  ...tags,
  ...components,
};

export default docs;
