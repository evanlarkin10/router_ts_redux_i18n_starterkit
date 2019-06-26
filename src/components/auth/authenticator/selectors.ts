import { ApplicationState } from "reducer";
import { AUTH_REDUCER_NAME, DEFAULT_STATE } from "./constants";

export const selectAuthState = (state: ApplicationState) => {
  return state[AUTH_REDUCER_NAME].authState
    ? state[AUTH_REDUCER_NAME].authState
    : DEFAULT_STATE;
};
