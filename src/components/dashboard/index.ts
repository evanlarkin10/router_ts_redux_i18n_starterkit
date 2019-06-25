import { connects } from "utilities/commonHocs";
import Dashboard from "./Dashboard";

const hocs = {
  i18n: ["common"]
};

export default connects<{}>(Dashboard, hocs);
