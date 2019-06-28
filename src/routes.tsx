import * as React from "react";
// import App from "./App";
import Dashboard from "components/dashboard";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import Header from "components/common/Header";
import Drawer from "components/common/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import StyleElement from "components/common/StyledElement";
import { connects } from "utilities/commonHocs";
// import SecureRoute from "./components/secureRoute";
// import Authentication from "components/authenticator";
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
export type RouterProps = RouteComponentProps &
  StyleElement<typeof routerStyles>;
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
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

// export default withRouter(Routes);
const hocs = {
  styles: routerStyles,
  router: true
};
// withRouter must wrap Routes
export default connects<{}>(withRouter(Routes), hocs);
