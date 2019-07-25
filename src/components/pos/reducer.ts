import { Action } from "typescript-fsa";
import { POS_REDUCER_NAME } from "./constants";
import reducerRegistry from "reducer/reducerRegistry";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import User, { UserDto } from "models/User";
import { POSLayout } from "./types";
export interface POSState {
  isLoadingPOS: boolean;
  layout: POSLayout[];
  addModalOpen: boolean;
  paymentTypeModalOpen: boolean;
}

export const initialState = {
  isLoadingPOS: false,
  addModalOpen: false,
  paymentTypeModalOpen: false,
  layout: Cookie.get(COOKIE_USER_KEY)
    ? JSON.parse(
        new User(JSON.parse(Cookie.get(COOKIE_USER_KEY)) as UserDto).preferences
      )
    : null
};

export const posReducer = (
  state: POSState = initialState,
  action: Action<any>
): POSState => {
  switch (action.type) {
    case "posReducer/SAVE_POS_PREFERENCES_STARTED":
      return { ...state, isLoadingPOS: true };
    case "posReducer/SAVE_POS_PREFERENCES_DONE":
      return { ...state, isLoadingPOS: false, layout: action.payload.params };
    case "posReducer/SAVE_POS_PREFERENCES_FAILED":
      return { ...state, isLoadingPOS: false };

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
    default:
      return initialState;
  }
};

reducerRegistry.register(POS_REDUCER_NAME, posReducer);
