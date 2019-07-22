import { Action } from "typescript-fsa";
import reducerRegistry from 'reducer/reducerRegistry'
import { DRAWER_REDUCER_NAME } from './constants'
export interface DrawerState {
  drawerOpen: boolean;
}

export const initialState = {
  drawerOpen: false
};

export const drawerReducer = (
  state: DrawerState = initialState,
  action: Action<any>
): DrawerState => {
  switch (action.type) {
    case "drawerReducer/OPEN_DRAWER":
      return { ...state, drawerOpen: true };
    case "drawerReducer/CLOSE_DRAWER":
      return { ...state, drawerOpen: false };
    default:
      return initialState;
  }
};
reducerRegistry.register(DRAWER_REDUCER_NAME, drawerReducer)