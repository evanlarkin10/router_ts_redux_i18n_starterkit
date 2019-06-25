import { ActionType, AppAction } from "./actions";
export interface ExampleState {
  myBool: boolean;
}

export const initialState = {
  myBool: false
};

export const exampleReducer = (
  state: ExampleState = null,
  action: AppAction
): ExampleState => {
  switch (action.type) {
    case ActionType.SET_TRUE:
      return { myBool: true };
    case ActionType.SET_FALSE:
      return null;
    default:
      return state;
  }
};
