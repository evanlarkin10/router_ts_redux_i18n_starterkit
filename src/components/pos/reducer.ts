import { Action } from "typescript-fsa";
import { POS_REDUCER_NAME } from "./constants";
import reducerRegistry from "reducer/reducerRegistry";
export interface POSState {
  isLoadingPOS: boolean;
  addModalOpen: boolean;
  paymentTypeModalOpen: boolean;
}

export const initialState = {
  isLoadingPOS: false,
  addModalOpen: false,
  paymentTypeModalOpen: false
};

export const posReducer = (
  state: POSState = initialState,
  action: Action<any>
): POSState => {
  switch (action.type) {
    case "posReducer/SET_LOADING_POS":
      return { ...state, isLoadingPOS: action.payload };

    case "posReducer/OPEN_ADD_MODAL_BUTTON":
      return { ...state, addModalOpen: true };
    case "posReducer/CLOSE_ADD_MODAL_BUTTON":
      return { ...state, addModalOpen: false };
    case "posReducer/OPEN_PAYMENT_TYPE_MODAL":
      return { ...state, paymentTypeModalOpen: true };
    case "posReducer/CLOSE_PAYMENT_TYPE_MODAL":
      return { ...state, paymentTypeModalOpen: false };
    case "posReducer/CLOSE_PAYMENT_TYPE_MODAL":
      return { ...state, paymentTypeModalOpen: false };
    default:
      return { ...state };
  }
};

reducerRegistry.register(POS_REDUCER_NAME, posReducer);
