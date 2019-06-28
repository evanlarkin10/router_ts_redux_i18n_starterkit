import SignInPage from "./SignIn";
import { connects } from "utilities/commonHocs";
import authStyles from '../common/authStyles'
import { SignInOwnProps } from "./types";

const hocs = {
  styles: authStyles
};

export default connects<SignInOwnProps>(SignInPage, hocs);
