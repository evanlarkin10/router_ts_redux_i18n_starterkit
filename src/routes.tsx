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

class Routes extends React.Component<RouterProps> {
  componentDidMount() {
    API.graphql(graphqlOperation(queries.getUser))
      .then(async (user: any) => {
        if (user.data.getUser === null) {
          const identity_user = await Auth.currentUserInfo();
          const input = {
            identity_id: identity_user.id,
            org_id: identity_user.attributes["custom:org_id"],
            org_name: identity_user.attributes['custom:org_name'],
            email: identity_user.attributes.email,
            first_name: identity_user.attributes.given_name,
            last_name: identity_user.attributes.family_name,
            email_verified: identity_user.attributes.email_verified
          };
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
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/employees" component={Employees} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </>
    );
  }
}

const hocs = {
  styles: routerStyles,
  router: true
};
// withRouter must wrap Routes
export default connects<{}>(withRouter(Routes), hocs);
