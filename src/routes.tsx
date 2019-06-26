import * as React from "react";
// import App from "./App";
import Dashboard from "components/dashboard";
import Header from "@common/Header";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SecureRoute from "./components/secureRoute";
import Authentication from "components/authenticator";

class Routes extends React.Component<RouteComponentProps> {
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
              <SecureRoute exact path="/" component={Dashboard} />
            </Switch>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withRouter(Routes);
