import * as React from "react";
import "./App.css";
// import Authentication from "components/auth/authenticator";
// import Routes from "./routes";
import { hot } from "react-hot-loader/root";
import Authentication from "components/auth/authenticator";
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports';
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
});
class App extends React.Component {
  render() {
    return <Authentication />;
  }
}

export default hot(App);
