import * as React from "react";
import "./App.css";
// import Authentication from "components/auth/authenticator";
// import Routes from "./routes";
import { hot } from "react-hot-loader/root";
import Authentication from "components/auth/authenticator";
import Amplify, { API, graphqlOperation, Auth } from 'aws-amplify'
import * as queries from "./graphql/queries";
import * as mutations from "./graphql/mutations";
import awsconfig from './aws-exports';
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
});
class App extends React.Component {

  componentDidMount() {
    console.log("comp mount tsx")
    API.graphql(graphqlOperation(queries.getUser))
      .then(async (user: any) => {
        console.log("USER:", user)
        if (user.data.getUser == null) {
          const identityUser = await Auth.currentCredentials();
          const identityId = identityUser.identityId;

          const input = {
            identity_id: identityId,
          };

          API.graphql(graphqlOperation(mutations.createUser, { input }))

        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  render() {
    return <Authentication />;
  }
}

export default hot(App);
