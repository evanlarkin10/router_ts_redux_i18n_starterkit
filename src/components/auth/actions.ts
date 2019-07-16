import { Action } from "redux";

export enum ActionType {
    SET_USER = "SET_USER"
}

export interface AppAction extends Action<ActionType> {
    payload?: any;
}

export interface IApplicationProps {
    setUser: () => AppAction;
}

export const setUser = (data: any): AppAction => {
    return {
        type: ActionType.SET_USER,
        payload: data
    };
};
