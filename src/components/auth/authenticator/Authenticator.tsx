import * as React from "react";
import { checkSession } from "utilities/auth";
import SignIn from "../signIn";
import SignUp from "../signUp";
import Verify from "../verify";
import Pricing from "../pricing";
import PasswordReset from "../passwordReset";
// import Routes from "routes";
import ForgotPassword from "../forgotPassword";
import { setAuthState } from "./actions";
// import { Redirect } from "react-router";
import App from "App";

export interface AuthStateProps {
  authState: string;
}
export interface AuthOwnProps {
  authorized: Promise<boolean>;
}
export interface AuthDispatchProps {
  setAuthState: typeof setAuthState;
}
type AuthProps = AuthStateProps & AuthDispatchProps & AuthOwnProps;

export default class Authentication extends React.Component<
  AuthProps,
  AuthOwnProps
  > {
  constructor(props: AuthProps) {
    super(props);
    this.state = {
      authorized: checkSession()
    };
  }
  componentDidMount() {
    this.checkAuthState()
  }
  async checkAuthState() {
    try {
      const result = await checkSession()
      if (result) {
        this.props.setAuthState("Authenticated");
      }

    }
    catch (err) {
      console.log(err)
    }
  }
  switchComponent = (status: string) => {
    this.props.setAuthState(status);
    this.forceUpdate();
  };
  // tslint:disable-next-line:variable-name
  AuthComponent: React.SFC = () => {
    console.log("RENDER AUTH STATE", this.props.authState);
    switch (this.props.authState) {
      case "SignIn":
        return <SignIn switchComponent={this.switchComponent} />;
      case "Pricing":
        return <Pricing switchComponent={this.switchComponent} />;
      case "SignUp":
        return <SignUp switchComponent={this.switchComponent} />;
      case "Verify":
        return <Verify switchComponent={this.switchComponent} />;
      case "ForgotPassword":
        return <ForgotPassword switchComponent={this.switchComponent} />;
      case "PasswordReset":
        return <PasswordReset switchComponent={this.switchComponent} />;
      case "Authenticated":
        return <App />;
      default:
        return <SignUp switchComponent={this.switchComponent} />;
    }
  };
  render() {
    return <div>{this.AuthComponent(this.props)}</div>;
  }
}
