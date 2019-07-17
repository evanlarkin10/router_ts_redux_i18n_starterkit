// import { AppAction } from "./actions";
import { Action } from 'typescript-fsa'
import User, { UserDto } from "models/User"
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";

let userModal = null
const userCookie = Cookie.get(COOKIE_USER_KEY)
try {
    userModal = userCookie ? new User(JSON.parse(userCookie).getUser as UserDto) : null;
} catch (e) {
    console.log(e)
}
export interface UserState {
    user: User;
    isLoadingUser: boolean;
}

export const initialState = {
    user: userModal,
    isLoadingUser: false
};

export const userReducer = (
    state: UserState = initialState,
    action: Action<any>
): UserState => {
    switch (action.type) {
        case "userReducer/LOAD_USER_STARTED":
            return { ...state };
        case "userReducer/LOAD_USER_DONE":
            return { ...state, user: action.payload };
        case "userReducer/LOAD_USER_FAILED":
            console.log(action.payload)
        case "userReducer/SET_LOADING_USER":
            return { ...state, isLoadingUser: action.payload };
        default:
            return initialState;
    }
};
