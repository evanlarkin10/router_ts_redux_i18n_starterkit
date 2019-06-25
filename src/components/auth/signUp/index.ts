import SignUpPage from "./SignUp";
import { connects } from "utilities/commonHocs";
import signUpStyles from "./signUpStyles";
import { SignUpOwnProps } from "./types";

const hocs = {
  i18n: "auth",
  styles: signUpStyles
};

export default connects<SignUpOwnProps>(SignUpPage, hocs);
