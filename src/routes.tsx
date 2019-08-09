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
import Header from "components/common/header";
import Drawer from "@common/drawer";
import NotFoundPage from "components/common/NotFoundPage";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import StyleElement from "components/common/StyledElement";
import { connects } from "utilities/commonHocs";
import Employees from "components/employees";
import POS from "components/pos";
import MyAccount from "components/myAccount";
import LoadingIndicator from "components/common/loadingIndicator";
import { setUser } from "redux/UserAPI/actions";
import { selectIsSettingUser } from "redux/UserAPI/selectors";
import { ApplicationState } from "reducer";
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
  StyleElement<typeof routerStyles> &
  RouterDispatchProps &
  RouterStateProps;

class Routes extends React.Component<RouterProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSetting: true
    };
  }
  componentDidMount() {
    this.props.setUser();
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        {!this.props.isSettingUser && (
          <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Drawer />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Switch>
                <Redirect exact from="/" to="/dashboard" />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/employees" component={Employees} />
                <Route path="/pos" component={POS} />
                <Route path="/account" component={MyAccount} />
                <Route path="" component={NotFoundPage} />
              </Switch>
            </main>
          </div>
        )}
        {this.props.isSettingUser && <LoadingIndicator />}
      </>
    );
  }
}

export interface RouterStateProps {
  isSettingUser: Boolean;
}
export interface RouterDispatchProps {
  setUser: typeof setUser.started;
}
const mapStateToProps = (state: ApplicationState): RouterStateProps => ({
  isSettingUser: selectIsSettingUser(state)
});

const mapDispatchToProps: RouterDispatchProps = {
  setUser: setUser.started
};

const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  styles: routerStyles,
  router: true
};
// withRouter must wrap Routes
export default connects<{}>(withRouter(Routes), hocs);
