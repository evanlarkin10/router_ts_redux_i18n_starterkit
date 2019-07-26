import actionCreatorFactory from "typescript-fsa";
import { USER_REDUCER_NAME } from "./constants";
import { POSLayout } from "components/pos/types";
import User, { UserPreferenceDto } from "models/User";
const actionCreator = actionCreatorFactory(USER_REDUCER_NAME);
export enum ActionType {
  SET_LOADING_USER = "SET_LOADING_USER",
  SET_USER = "SET_USER",
  SAVE_POS_PREFERENCES = "SAVE_POS_PREFERENCES",
  SET_USER_PREFERENCES = "SET_USER_PREFERENCES"
}

export const setLoading = actionCreator<Boolean>(ActionType.SET_LOADING_USER);

export const setUser = actionCreator.async<void, User, string>(
  ActionType.SET_USER
);

export const savePOSPreferences = actionCreator.async<POSLayout, User, string>(
  ActionType.SAVE_POS_PREFERENCES
);

export const setUserPreferences = actionCreator<UserPreferenceDto>(
  ActionType.SET_USER_PREFERENCES
);
