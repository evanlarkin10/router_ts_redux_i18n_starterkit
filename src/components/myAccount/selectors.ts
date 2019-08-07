import { ApplicationState } from "reducer";
import { USER_REDUCER_NAME } from "redux/UserAPI/constants";

export const selectUser = (state: ApplicationState) => {
  return state[USER_REDUCER_NAME].user ? state[USER_REDUCER_NAME].user : null;
};
