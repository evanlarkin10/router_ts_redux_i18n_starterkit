import ForgotPasswordPage from "./ForgotPassword";
import { connects } from "utilities/commonHocs";
import authStyles from '../common/authStyles'
import { ForgotPasswordOwnProps } from "./types";

const hocs = {
  styles: authStyles
};

export default connects<ForgotPasswordOwnProps>(ForgotPasswordPage, hocs);
