import * as React from "react";
import { checkAuth } from "utilities/checkAuth/CheckAuth";
import SignIn from "../signIn";
import SignUp from "../signUp";
import Verify from "../verify";
import Routes from "routes";
import { setAuthState } from "./actions";

export interface AuthStateProps {
  authState: string;
}
export interface AuthDispatchProps {
  setAuthState: typeof setAuthState;
}
type AuthProps = AuthStateProps & AuthDispatchProps;

export default class Authentication extends React.Component<AuthProps> {
  componentDidMount() {
    if (checkAuth()) {
      this.setState({ status: "Authenticated" });
    }
  }
  switchComponent = (status: string) => {
    this.props.setAuthState(status);
    this.forceUpdate();
  };
  // tslint:disable-next-line:variable-name
  AuthComponent: React.SFC = () => {
    console.log(this.props.authState);
    switch (this.props.authState) {
      case "SignIn":
        return <SignIn switchComponent={this.switchComponent} />;

      case "SignUp":
        return <SignUp switchComponent={this.switchComponent} />;

      case "Verify":
        return <Verify switchComponent={this.switchComponent} />;

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
