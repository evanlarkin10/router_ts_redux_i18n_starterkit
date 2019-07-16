import { connects } from "utilities/commonHocs";
import Employees from "./Employees";

const hocs = {
    i18n: ["common"]
};

export default connects<{}>(Employees, hocs);