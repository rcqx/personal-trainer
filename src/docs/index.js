import basicInfo from "./basicInfo.js";
import serverInfo from "./serverInfo.js";
import tags from "./tags.js";
import components from "./components/index.js";
import Paths from "./paths/index.js";

const docs = {
  ...basicInfo,
  ...serverInfo,
  ...tags,
  ...components,
  ...Paths
};

export default docs;
