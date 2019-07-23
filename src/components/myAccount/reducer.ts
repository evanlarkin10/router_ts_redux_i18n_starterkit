import { AppAction } from "./actions";
export interface MyAccountState {
  myBool: boolean;
}

export const initialState = {
  myBool: false
};

export const myAccountReducer = (
  state: MyAccountState = initialState,
  action: AppAction
): MyAccountState => {
  switch (action.type) {
    case "SET_TRUE":
      return { ...state, myBool: true };
    case "SET_FALSE":
      return { ...state };
    default:
      return initialState;
  }
};
