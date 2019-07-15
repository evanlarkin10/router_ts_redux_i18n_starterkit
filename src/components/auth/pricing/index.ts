import PricingPage from "./Pricing";
import { connects } from "utilities/commonHocs";
import { styles } from '../common/authStyles'

const hocs = {
  styles
};

export default connects<{}>(PricingPage, hocs);
