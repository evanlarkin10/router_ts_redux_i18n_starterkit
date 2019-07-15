import { AppAction } from "./actions";
import { UserDto } from './types'

export interface UserState {
    user?: UserDto;
}

export const initialState = {
}

export const userReducer = (
    state: UserState = initialState,
    action: AppAction
): UserState => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload };
        default:
            return initialState;
    }
};
