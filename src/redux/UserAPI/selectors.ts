import { ApplicationState } from "reducer";
import { USER_REDUCER_NAME } from "./constants";

export const selectUser = (state: ApplicationState) => {
    return state[USER_REDUCER_NAME]
        ? state[USER_REDUCER_NAME]
        : null;
};
