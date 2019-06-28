import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface SecureRouteOwnProps extends RouteProps {
  authenticationPath?: string;
}
export class SecureRoute extends Route {
  // if ever not logged in redirect away from secure route
  checkSession() {
    return false;
  }
  render() {
    const authenticationPath = "/";
    let redirectPath = "";
    if (!this.checkSession()) {
      redirectPath = authenticationPath;
    }
    if (redirectPath) {
      const renderComponent = () => (
        <Redirect to={{ pathname: redirectPath }} />
      );
      return (
        <Route {...this.props} component={renderComponent} render={null} />
      );
    }
    return <Route {...this.props} />;
  }
}

export default SecureRoute;
