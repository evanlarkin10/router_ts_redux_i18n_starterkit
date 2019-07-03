import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { checkSession } from "utilities/auth";
export interface SecureRouteStateProps {
  authState: String;
}
export interface SecureRouteOwnProps extends RouteProps {
  authenticationPath?: string;
}
type SecureRouteProps = SecureRouteStateProps & SecureRouteOwnProps;
export class SecureRoute extends Route<SecureRouteProps> {
  // if ever not logged in redirect away from secure route

  render() {
    const redirectPath = "/";
    if (!checkSession()) {
      console.log("Not Authorized, Redirecting");
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
