import { Action } from "redux";

export enum ActionType {
  SET_TRUE = "SET_TRUE",
  SET_FALSE = "SET_FALSE"
}

export interface AppAction extends Action<ActionType> {
  payload?: any;
}

export interface IApplicationProps {
  setFalse: () => AppAction;
  setTrue: () => AppAction;
}

export const setTrue = (): AppAction => {
  return {
    type: ActionType.SET_TRUE
  };
};

export const setFalse = (): AppAction => {
  return {
    type: ActionType.SET_TRUE
  };
};
