import verifyPage from "./Verify";
import { connects } from "utilities/commonHocs";
import authStyles from '../common/authStyles'
import { VerifyOwnProps } from "./types";

const hocs = {
  i18n: "auth",
  styles: authStyles
};

export default connects<VerifyOwnProps>(verifyPage, hocs);
