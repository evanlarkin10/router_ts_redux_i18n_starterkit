import { ApplicationState } from "reducer";
import { POS_REDUCER_NAME } from "./constants";
// import { USER_REDUCER_NAME } from "redux/UserAPI/constants";

/* export const selectLayout = (state: ApplicationState) => {
    const layoutString = state[USER_REDUCER_NAME].user.preferences
        ? state[USER_REDUCER_NAME].user.preferences
        : null;
    console.log("selector", JSON.parse(layoutString)[12].x)
    return layoutString ? JSON.parse(layoutString) : null
}; */

export const selectIsLoadingPOS = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].isLoadingPOS
    ? state[POS_REDUCER_NAME].isLoadingPOS
    : null;
};

export const selectLayout = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].layout ? state[POS_REDUCER_NAME].layout : null;
};

export const selectAddModalOpen = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].addModalOpen
    ? state[POS_REDUCER_NAME].addModalOpen
    : null;
};
