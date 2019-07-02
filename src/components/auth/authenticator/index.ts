import Authentication, {
  AuthDispatchProps,
  AuthStateProps
} from "./Authenticator";
import { setAuthState } from "./actions";
import { ApplicationState } from "reducer";
import { connects } from "utilities/commonHocs";
import { selectAuthState } from "./selectors";
const mapStateToProps = (state: ApplicationState): AuthStateProps => ({
  authState: selectAuthState(state)
});

const mapDispatchToProps: AuthDispatchProps = {
  setAuthState
};

const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  }
};

export default connects<{}, AuthStateProps, AuthDispatchProps>(
  Authentication,
  hocs
);
