import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface SecureRouteStateProps {
  authState: String;
}
export interface SecureRouteOwnProps extends RouteProps {
  authenticationPath?: string;
}
type SecureRouteProps = SecureRouteStateProps & SecureRouteOwnProps;
export class SecureRoute extends Route<SecureRouteProps> {
  // if ever not logged in redirect away from secure route
  checkSession() {
    if (this.props.authState === "Authenticated") {
      ("check session pass");
      return true;
    }
    return false;
  }
  render() {
    const redirectPath = "/";
    if (!this.checkSession()) {
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
