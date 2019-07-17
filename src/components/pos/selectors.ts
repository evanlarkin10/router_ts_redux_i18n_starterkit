import { ApplicationState } from "reducer";
import { POS_REDUCER_NAME } from "./constants";

export const selectLayout = (state: ApplicationState) => {
    return state[POS_REDUCER_NAME].layout
        ? state[POS_REDUCER_NAME].layout
        : null;
};

export const selectIsLoadingPOS = (state: ApplicationState) => {
    return state[POS_REDUCER_NAME].isLoadingPOS
        ? state[POS_REDUCER_NAME].isLoadingPOS
        : null;
};
export const selectIsEditingPOS = (state: ApplicationState) => {
    return state[POS_REDUCER_NAME].isEditingPOS
        ? state[POS_REDUCER_NAME].isEditingPOS
        : null;
};
