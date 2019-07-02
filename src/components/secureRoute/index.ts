import SecureRoute, {
  SecureRouteStateProps,
  SecureRouteOwnProps
} from "./SecureRoute";
import { connects } from "utilities/commonHocs";
import { selectAuthState } from "components/auth/authenticator/selectors";
import { ApplicationState } from "reducer";
const mapStateToProps = (state: ApplicationState): SecureRouteStateProps => ({
  authState: selectAuthState(state)
});

const hocs = {
  redux: {
    mapStateToProps
  }
};

export default connects<SecureRouteOwnProps>(SecureRoute, hocs);
