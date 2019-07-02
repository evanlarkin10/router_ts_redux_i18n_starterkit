import { connects } from "utilities/commonHocs";
import NotFoundPage from "./NotFoundPage";

const hocs = {
  i18n: ["common"]
};

export default connects<{}>(NotFoundPage, hocs);
