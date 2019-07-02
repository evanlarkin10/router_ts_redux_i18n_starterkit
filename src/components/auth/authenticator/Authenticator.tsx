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
import Routes from "routes";

export interface AuthStateProps {
  authState: string;
}
export interface AuthOwnProps {
  authorized: boolean;
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
    console.log("ComponentDidMount");
    if (checkSession()) {
      console.log("Set auth state Authenticated");
      this.props.setAuthState("Authenticated");
    }
  }
  switchComponent = (status: string) => {
    console.log("Set auth state", status);
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
        return <Routes />;
      default:
        return <SignUp switchComponent={this.switchComponent} />;
    }
  };
  render() {
    return <div>{this.AuthComponent(this.props)}</div>;
  }
}
