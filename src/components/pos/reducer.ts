import { Action } from "typescript-fsa";
import { POS_REDUCER_NAME } from "./constants";
import reducerRegistry from "reducer/reducerRegistry";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import User, { UserDto } from "models/User";
import { Layout } from "react-grid-layout";
export interface POSState {
  isLoadingPOS: boolean;
  layout: Layout[];
  addModalOpen: boolean;
}

export const initialState = {
  isLoadingPOS: false,
  addModalOpen: false,
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
  console.log("ACTION", state, action);
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
    default:
      return initialState;
  }
};

reducerRegistry.register(POS_REDUCER_NAME, posReducer);
