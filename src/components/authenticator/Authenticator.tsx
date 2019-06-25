import * as React from "react";

import SignIn from "../auth/signIn";
import SignUp from "../auth/signUp";
import Verify from "../auth/verify";

import { Auth } from "aws-amplify";

export default class Authentication extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    phone_number: "",
    code: "",
    status: "SignIn"
  };

  componentDidMount() {
    Auth.currentAuthenticatedUser({
      bypassCache: true // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(data => {
        const user = { username: data.username, ...data.attributes };
        if (user.email_verified) this.setState({ user, status: "Welcome" });
      })
      .catch(err => console.log(err));
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // tslint:disable-next-line:variable-name
  AuthComponent: React.SFC = props => {
    console.log(props);
    switch (this.state.status) {
      case "SignUp":
        return <SignUp switchComponent={this.switchComponent} />;

      case "Verify":
        return <Verify switchComponent={this.switchComponent} />;

      case "SignIn":
        return <SignIn switchComponent={this.switchComponent} />;

      case "Welcome":
        return <div>"test"</div>;
      default:
        return <SignUp switchComponent={this.switchComponent} />;
    }
  };
  switchComponent = (status: any) => {
    this.setState({ status });
  };
  render() {
    console.log("Render Auth");
    return <div>{this.AuthComponent(this.props)}</div>;
  }
}
