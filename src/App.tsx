import * as React from "react";
import "./App.css";
import Authentication from "components/auth/authenticator";
import {hot} from 'react-hot-loader/root'
class App extends React.Component {
  // get current authenticated user

  render() {
    console.log("Render App");
    return <Authentication />;
  }
}

export default hot(App);
