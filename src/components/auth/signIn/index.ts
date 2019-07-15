import SignInPage from "./SignIn";
import { connects } from "utilities/commonHocs";
import authStyles from "../common/authStyles";
import { SignInOwnProps, SignInDispatchProps } from "./types";
import { setUser } from 'redux/UserAPI/actions'

const mapDispatchToProps: SignInDispatchProps = {
  setUser
};

const hocs = {
  redux: {
    mapDispatchToProps
  },
  styles: authStyles
};

export default connects<SignInOwnProps, SignInDispatchProps>(SignInPage, hocs);
