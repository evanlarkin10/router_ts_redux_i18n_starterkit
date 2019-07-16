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
import { Auth, API, graphqlOperation } from "aws-amplify";
import LoadingIndicator from 'components/common/loadingIndicator'
import { UserDto } from 'models/User'
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
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

interface RouterState {
  isLoading: boolean
}
interface RouterStateProps {
  authState: String;
}
export type RouterProps = RouteComponentProps &
  StyleElement<typeof routerStyles> &
  RouterStateProps;

class Routes extends React.Component<RouterProps, RouterState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    console.log("Routes mounted")
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
            .then((result: any) => this.setPreferences(result))
        }
        else {
          this.getPreferences(user.data)
        }
      })
      .catch((error: any) => {
        console.log(error);
        this.props.history.push('/')
      });
  }
  async getPreferences(user: UserDto) {
    Cookie.set(COOKIE_USER_KEY, user, {
      expires: 1
    });
    this.setState({ isLoading: false })
  }
  async setPreferences(user: UserDto) {
    Cookie.set(COOKIE_USER_KEY, user, {
      expires: 1
    });
    this.setState({ isLoading: false })
  }
  render() {
    const { classes } = this.props;
    console.log(this.state.isLoading)
    return (
      <>{!this.state.isLoading &&
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
          this.state.isLoading && <LoadingIndicator />
        }
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
