import { Action } from 'typescript-fsa'

export interface POSState {
    isLoadingPOS: boolean;
}

export const initialState = {
    isLoadingPOS: false
};

export const posReducer = (
    state: POSState = initialState,
    action: Action<any>
): POSState => {
    switch (action.type) {
        case "posReducer/SAVE_POS_PREFERENCES_STARTED":
            console.log("Save Started");
        case "posReducer/SAVE_POS_PREFERENCES_DONE":
            console.log("Save Complete")
        case "posReducer/SAVE_POS_PREFERENCES_FAILED":
            console.log(action.payload)

        case "posReducer/SET_LOADING_POS":
            return { ...state, isLoadingPOS: action.payload };
        default:
            return initialState;
    }
};
