import { AppAction } from "./actions";
import { DEFAULT_STATE } from "./constants";
export interface AuthState {
  authState: string;
}

export const initialState = {
  authState: DEFAULT_STATE
};

export const authReducer = (
  state: AuthState = initialState,
  action: AppAction
): AuthState => {
  switch (action.type) {
    case "SET_AUTH_STATE":
      return { ...state, authState: action.payload };
    default:
      return initialState;
  }
};
