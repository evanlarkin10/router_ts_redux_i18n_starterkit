import PricingPage from "./Pricing";
import { connects } from "utilities/commonHocs";
import authStyles from '../common/authStyles'
import { PricingOwnProps } from "./types";

const hocs = {
  styles: authStyles
};

export default connects<PricingOwnProps>(PricingPage, hocs);
