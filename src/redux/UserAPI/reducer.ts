// import { AppAction } from "./actions";
import { Action } from "typescript-fsa";
import User, { UserDto, PREFERENCES_KEY, UserPreferences } from "models/User";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import reducerRegistry from "reducer/reducerRegistry";
import { USER_REDUCER_NAME } from "./constants";
import { DEFAULT_PREFERENCES } from "./types";

let userModal: any = null;
const userCookie = Cookie.get(COOKIE_USER_KEY);
try {
  userModal = Cookie.get(COOKIE_USER_KEY)
    ? new User(JSON.parse(userCookie) as UserDto)
    : null;
  console.log("Cookie", userModal);
} catch (e) {
  console.log(e);
}

const preferencesLocalStorage = localStorage.getItem(PREFERENCES_KEY);
let preferences = DEFAULT_PREFERENCES;
try {
  if (preferencesLocalStorage) {
    console.log("get local storage", preferencesLocalStorage);
    preferences = { pos: JSON.parse(preferencesLocalStorage) };
  }
} catch (e) {
  User.updatePreferences(DEFAULT_PREFERENCES);
}

export interface UserState {
  preferences: UserPreferences;
  user: User;
  isSettingUser: boolean;
}

export const initialState = {
  preferences,
  user: Cookie.get(COOKIE_USER_KEY)
    ? new User(JSON.parse(Cookie.get(COOKIE_USER_KEY)) as UserDto)
    : null,
  isSettingUser: false
};

export const userReducer = (
  state: UserState = initialState,
  action: Action<any>
): UserState => {
  switch (action.type) {
    case "userReducer/SET_USER_STARTED":
      return { ...state };
    case "userReducer/SET_USER_DONE":
      return { ...state, user: action.payload.result };
    case "userReducer/SET_USER_FAILED":
      console.log(action.payload);

    case "userReducer/SAVE_POS_PREFERENCES_STARTED":
      return state;
    case "userReducer/SAVE_POS_PREFERENCES_DONE":
      return { ...state, user: action.payload.result };
    case "userReducer/SAVE_POS_PREFERENCES_FAILED":
      return state;

    case "userReducer/SET_USER_PREFERENCES":
      console.log(action);
      return {
        ...state,
        preferences: JSON.parse(action.payload)
      };

    case "userReducer/SET_LOADING_USER":
      return { ...state, isSettingUser: action.payload };
    default:
      return initialState;
  }
};

reducerRegistry.register(USER_REDUCER_NAME, userReducer);
