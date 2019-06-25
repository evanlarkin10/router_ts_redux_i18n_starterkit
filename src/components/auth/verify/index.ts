import verifyPage from "./Verify";
import { connects } from "utilities/commonHocs";
import signUpStyles from "./verifyStyles";
import { VerifyOwnProps } from "./types";

const hocs = {
  i18n: "auth",
  styles: signUpStyles
};

export default connects<VerifyOwnProps>(verifyPage, hocs);
