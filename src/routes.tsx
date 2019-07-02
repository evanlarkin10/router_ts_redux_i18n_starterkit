import * as React from "react";
// import App from "./App";
import Dashboard from "components/dashboard";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import Header from "components/common/Header";
import Drawer from "components/common/Drawer";
import NotFoundPage from "components/common/NotFoundPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import StyleElement from "components/common/StyledElement";
import { connects } from "utilities/commonHocs";
// import Authentication from "components/auth/authenticator";
import SecureRoute from "./components/secureRoute";
import { selectAuthState } from "components/auth/authenticator/selectors";
import { ApplicationState } from "reducer";
import Employees from "components/employees";

const routerStyles = (theme: Theme) =>
  createStyles({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },
    root: {
      display: "flex"
    }
  });
interface RouterStateProps {
  authState: String;
}
export type RouterProps = RouteComponentProps &
  StyleElement<typeof routerStyles> &
  RouterStateProps;

// const renderAuth = () => <Authentication />;

class Routes extends React.Component<RouterProps> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <Drawer />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <SecureRoute path="/dashboard" component={Dashboard} />
              <SecureRoute path="/employees" component={Employees} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState): RouterStateProps => ({
  authState: selectAuthState(state)
});

const hocs = {
  redux: {
    mapStateToProps
  },
  styles: routerStyles,
  router: true
};
// withRouter must wrap Routes
export default connects<{}>(withRouter(Routes), hocs);
