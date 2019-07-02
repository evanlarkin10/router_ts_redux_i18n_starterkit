import { AppAction } from "./actions";
export interface DrawerState {
  drawerOpen: boolean;
}

export const initialState = {
  drawerOpen: false
};

export const drawerReducer = (
  state: DrawerState = initialState,
  action: AppAction
): DrawerState => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return { ...state, drawerOpen: true };
    case "CLOSE_DRAWER":
      return { ...state, drawerOpen: false };
    default:
      return initialState;
  }
};
