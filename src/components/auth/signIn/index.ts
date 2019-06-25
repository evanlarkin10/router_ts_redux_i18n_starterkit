import SignInPage from "./SignIn";
import { connects } from "utilities/commonHocs";
import signInStyles from "./signInStyles";
import { SignInOwnProps } from "./types";

const hocs = {
  i18n: "auth",
  styles: signInStyles
};

export default connects<SignInOwnProps>(SignInPage, hocs);
