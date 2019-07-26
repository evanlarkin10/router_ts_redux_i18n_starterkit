import { ApplicationState } from "reducer";
import { POS_REDUCER_NAME } from "./constants";

export const selectIsLoadingPOS = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].isLoadingPOS
    ? state[POS_REDUCER_NAME].isLoadingPOS
    : null;
};

export const selectLayouts = (state: ApplicationState) => {
  return state[POS_REDUCER_NAME].layouts
    ? state[POS_REDUCER_NAME].layouts
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
