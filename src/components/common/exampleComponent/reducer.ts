import { AppAction } from "./actions";
export interface ExampleState {
  myBool: boolean;
}

export const initialState = {
  myBool: false
};

export const exampleReducer = (
  state: ExampleState = initialState,
  action: AppAction
): ExampleState => {
  switch (action.type) {
    case "SET_TRUE":
      return { ...state, myBool: true };
    case "SET_FALSE":
      return { ...state };
    default:
      return initialState;
  }
};
