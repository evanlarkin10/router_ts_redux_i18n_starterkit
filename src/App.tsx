import * as React from "react";
import "./App.css";
// import Authentication from "components/auth/authenticator";
// import Routes from "./routes";
import { hot } from "react-hot-loader/root";
// import Authentication from "components/auth/authenticator";
import Routes from 'routes'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports';
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
});
interface AppProps {
  authState?: any;
}
class App extends React.Component<AppProps> {
  constructor(props: AppProps, context: any) {
    super(props, context);
  }

  render() {
    return this.props.authState === 'signedIn' && (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );

  }
}

export default hot(App);
