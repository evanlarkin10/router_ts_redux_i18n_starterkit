import { ApplicationState } from "reducer";
import { POS_REDUCER_NAME } from "./constants";
import { USER_REDUCER_NAME } from "redux/UserAPI/constants";
export const selectIsLoadingPOS = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].isLoadingPOS
    ? state[POS_REDUCER_NAME].isLoadingPOS
    : null;
};

export const selectLayouts = (state: ApplicationState) => {
  return state[USER_REDUCER_NAME].preferences.pos.layouts
    ? state[USER_REDUCER_NAME].preferences.pos.layouts
    : null;
};

export const selectAddModalOpen = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].addModalOpen
    ? state[POS_REDUCER_NAME].addModalOpen
    : null;
};

export const selectPaymentTypeModal = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].paymentTypeModalOpen
    ? state[POS_REDUCER_NAME].paymentTypeModalOpen
    : null;
};
