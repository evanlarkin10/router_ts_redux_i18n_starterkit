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
import SecureRoute from "./components/secureRoute";
import { selectAuthState } from "components/auth/authenticator/selectors";
import { ApplicationState } from "reducer";
import Employees from "components/employees";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'
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
  componentDidMount() {
    Auth.currentCredentials()
      .then((result) => console.log('creds', result))

    Auth.currentAuthenticatedUser()
      .then((result) => console.log('auth', result))

    Auth.currentUserInfo()
      .then((result) => console.log('info', result))

    API.graphql(graphqlOperation(queries.getUser))
      .then(async (user: any) => {
        console.log(user.data.getUser)
        if (user.data.getUser === null) {
          const identity_user = await Auth.currentUserInfo();
          console.log("identity user", identity_user)
          const input = {
            identity_id: identity_user.id,
            org_id: identity_user.attributes["custom:org_id"],
            org_name: identity_user.attributes['custom:org_name'],
            email: identity_user.attributes.email,
            first_name: identity_user.attributes.given_name,
            last_name: identity_user.attributes.family_name,
            email_verified: identity_user.attributes.email_verified
          };
          console.log('make query:', input)
          API.graphql(graphqlOperation(mutations.createUser, { input }))
        }
      })
      .catch((error: any) => {
        console.log(error);
        this.props.history.push('/')
      });
  }
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
