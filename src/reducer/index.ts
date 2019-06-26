import { EXAMPLE_REDUCER_NAME } from "components/common/exampleComponent/constants";
import {
  ExampleState,
  exampleReducer
} from "components/common/exampleComponent/reducer";
import { AuthState, authReducer } from "components/auth/authenticator/reducer";
import { AUTH_REDUCER_NAME } from "components/auth/authenticator/constants";
export interface ApplicationState {
  [EXAMPLE_REDUCER_NAME]: ExampleState;
  [AUTH_REDUCER_NAME]: AuthState;
}

export const rootReducer = {
  [EXAMPLE_REDUCER_NAME]: exampleReducer,
  [AUTH_REDUCER_NAME]: authReducer
};
