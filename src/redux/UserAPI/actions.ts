import actionCreatorFactory from 'typescript-fsa';
import { USER_REDUCER_NAME } from "./constants";
import User from 'models/User'
const actionCreator = actionCreatorFactory(USER_REDUCER_NAME)
export enum ActionType {
    SET_LOADING_USER = "SET_LOADING_USER",
    SET_USER = "SET_USER"
}

export const setLoading = actionCreator<Boolean>(
    ActionType.SET_LOADING_USER
)

export const setUser = actionCreator.async<void, User, string>(
    ActionType.SET_USER
)