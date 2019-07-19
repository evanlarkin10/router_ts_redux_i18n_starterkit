import actionCreatorFactory from "typescript-fsa";
import { USER_REDUCER_NAME } from "./constants";
import { Layout } from "react-grid-layout";
import User from "models/User";
const actionCreator = actionCreatorFactory(USER_REDUCER_NAME);
export enum ActionType {
  SET_LOADING_USER = "SET_LOADING_USER",
  SET_USER = "SET_USER",
  SAVE_POS_PREFERENCES = "SAVE_POS_PREFERENCES"
}

export const setLoading = actionCreator<Boolean>(ActionType.SET_LOADING_USER);

export const setUser = actionCreator.async<void, User, string>(
  ActionType.SET_USER
);

export const savePOSPreferences = actionCreator.async<Layout, User, string>(
  ActionType.SAVE_POS_PREFERENCES
);
