import { AppAction } from "./actions";
import User from "models/User"
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import { UserDto } from 'redux/UserAPI/types'

let userModal = null
const userCookie = Cookie.get(COOKIE_USER_KEY)
try {
    userModal = userCookie ? new User(JSON.parse(userCookie).getUser as UserDto) : null;
} catch (e) {
    console.log(e)
}
export interface AuthState {
    user: User;
}

export const initialState = {
    user: userModal
};

export const authReducer = (
    state: AuthState = initialState,
    action: AppAction
): AuthState => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload };
        default:
            return initialState;
    }
};
