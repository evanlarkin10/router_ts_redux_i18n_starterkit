import actionCreatorFactory from 'typescript-fsa';
import { USER_REDUCER_NAME } from "./constants";
import User from 'models/User'
const actionCreator = actionCreatorFactory(USER_REDUCER_NAME)
export enum ActionType {
    SET_LOADING_USER = "SET_LOADING_USER",
    LOAD_USER = "LOAD_USER"
}

export const setLoading = actionCreator<Boolean>(
    ActionType.SET_LOADING_USER
)

export const loadUser = actionCreator.async<void, User, string>(
    ActionType.LOAD_USER
)