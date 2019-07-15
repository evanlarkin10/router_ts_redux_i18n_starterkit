import { Action } from "redux";
import { UserDto } from './types'
export enum ActionType {
    SET_USER = "SET_USER"
}

export interface AppAction extends Action<ActionType> {
    payload?: any;
}

export interface IApplicationProps {
    setUser: () => AppAction;
}

export const setUser = (data: UserDto): AppAction => {
    return {
        type: ActionType.SET_USER,
        payload: data
    };
};
