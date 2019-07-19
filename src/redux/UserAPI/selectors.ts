import { ApplicationState } from "reducer";
import { USER_REDUCER_NAME } from "./constants";

export const selectUser = (state: ApplicationState) => {
  return state[USER_REDUCER_NAME].user ? state[USER_REDUCER_NAME].user : null;
};

export const selectIsSettingUser = (state: ApplicationState) => {
  return state[USER_REDUCER_NAME].isSettingUser
    ? state[USER_REDUCER_NAME].isSettingUser
    : null;
};
