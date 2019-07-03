import * as React from "react";
import "./App.css";
// import Authentication from "components/auth/authenticator";
// import Routes from "./routes";
import { hot } from "react-hot-loader/root";
import Authentication from "components/auth/authenticator";
class App extends React.Component {
  // get current authenticated user

  render() {
    return <Authentication />;
  }
}

export default hot(App);
