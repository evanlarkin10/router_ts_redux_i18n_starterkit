import * as React from "react";
import App from "./App";
import Dashboard from "components/dashboard";
import Header from "@common/Header";
import { Route, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SecureRoute from "./components/secureRoute";
import Authentication from "components/authenticator";

class Routes extends React.Component {
  render() {
    return (
      <>
        <Grid container className="appContainer" direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item xs className="pageContent">
            <Switch>
              <Route path="/auth" component={Authentication} />
              <SecureRoute path="/" component={App} />
              <SecureRoute path="/" component={Dashboard} />
              <SecureRoute path="*" component={Dashboard} />
            </Switch>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Routes;
