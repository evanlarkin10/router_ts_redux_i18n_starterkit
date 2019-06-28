import { ApplicationState } from "reducer";
import { DRAWER_REDUCER_NAME } from "./constants";

export const selectDrawerState = (state: ApplicationState) => {
  return state[DRAWER_REDUCER_NAME].drawerOpen
    ? state[DRAWER_REDUCER_NAME].drawerOpen
    : false;
};
