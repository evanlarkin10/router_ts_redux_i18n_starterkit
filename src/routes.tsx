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
import LoadingIndicator from 'components/common/loadingIndicator'
import { loadUser } from 'redux/UserAPI/actions'
import { selectIsLoadingUser } from "redux/UserAPI/selectors";
import { ApplicationState } from 'reducer'
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
  RouterDispatchProps & RouterStateProps;

class Routes extends React.Component<RouterProps, {}> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    console.log("Routes mounted")
    this.props.loadUser()

  }
  render() {
    const { classes } = this.props;
    console.log(this.props.isLoadingUser)
    return (
      <>{!this.props.isLoadingUser &&
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
              <Route path="" component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      }
        {
          this.props.isLoadingUser && <LoadingIndicator />
        }
      </>
    );
  }
}

export interface RouterStateProps {
  isLoadingUser: Boolean
}
export interface RouterDispatchProps {
  loadUser: typeof loadUser.started;
}
const mapStateToProps = (state: ApplicationState): RouterStateProps => ({
  isLoadingUser: selectIsLoadingUser(state)
});


const mapDispatchToProps: RouterDispatchProps = {
  loadUser: loadUser.started,
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
