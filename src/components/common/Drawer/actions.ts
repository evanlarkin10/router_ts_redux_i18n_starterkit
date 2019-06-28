import { Action } from "redux";

export enum ActionType {
  OPEN_DRAWER = "OPEN_DRAWER",
  CLOSE_DRAWER = "CLOSE_DRAWER"
}

export interface AppAction extends Action<ActionType> {
  payload?: any;
}

export interface IApplicationProps {
  openDrawer: () => AppAction;
  closeDrawer: () => AppAction;
}

export const openDrawer = (): AppAction => {
  return {
    type: ActionType.OPEN_DRAWER
  };
};

export const closeDrawer = (): AppAction => {
  return {
    type: ActionType.CLOSE_DRAWER
  };
};
