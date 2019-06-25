import { connects } from "utilities/commonHocs";
import Header from "./Header";

const hocs = {
  i18n: ["common"]
};

export default connects<{}>(Header, hocs);
