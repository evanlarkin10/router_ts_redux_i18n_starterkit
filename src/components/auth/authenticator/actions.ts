import { Action } from "redux";

export enum ActionType {
  SET_AUTH_STATE = "SET_AUTH_STATE"
}

export interface AppAction extends Action<ActionType> {
  payload?: any;
}

export interface IApplicationProps {
  setAuthState: () => AppAction;
}

export const setAuthState = (data: string): AppAction => {
  return {
    type: ActionType.SET_AUTH_STATE,
    payload: data
  };
};
