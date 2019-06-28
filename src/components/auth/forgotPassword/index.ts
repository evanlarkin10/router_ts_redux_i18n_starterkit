import ForgotPasswordPage from "./ForgotPassword";
import { connects } from "utilities/commonHocs";
import forgotPasswordStyles from "./forgotPasswordStyles";
import { ForgotPasswordOwnProps } from "./types";

const hocs = {
  styles: forgotPasswordStyles
};

export default connects<ForgotPasswordOwnProps>(ForgotPasswordPage, hocs);
