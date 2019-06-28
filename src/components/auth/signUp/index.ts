import SignUpPage from "./SignUp";
import { connects } from "utilities/commonHocs";
import authStyles from '../common/authStyles'
import { SignUpOwnProps } from "./types";

const hocs = {
  i18n: "auth",
  styles: authStyles
};

export default connects<SignUpOwnProps>(SignUpPage, hocs);
