import { checkSession } from "utilities/auth";
export const AUTH_REDUCER_NAME = "authReducer";
export const DEFAULT_STATE = checkSession() ? "Authenticated" : "SignIn";
