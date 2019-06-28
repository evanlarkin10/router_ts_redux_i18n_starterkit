import PasswordResetPage from "./PasswordReset";
import { connects } from "utilities/commonHocs";
import authStyles from '../common/authStyles'
import { PasswordResetOwnProps } from "./types";

const hocs = {
  styles: authStyles
};

export default connects<PasswordResetOwnProps>(PasswordResetPage, hocs);
