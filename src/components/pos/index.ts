import { connects } from "utilities/commonHocs";
import POS from "./POS";
import POSStyles from './posStyles'

const hocs = {
    i18n: ["common"],
    styles: POSStyles
};

export default connects<{}>(POS, hocs);