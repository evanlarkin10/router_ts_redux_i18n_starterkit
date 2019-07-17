import { Action } from 'typescript-fsa'
import { Layout } from 'react-grid-layout'
import { registerButtons } from './types';

export interface POSState {
    layout: Layout[];
    isLoadingPOS: boolean;
    isEditingPOS: boolean
}

export const initialState = {
    layout: registerButtons,
    isLoadingPOS: false,
    isEditingPOS: false
};

export const posReducer = (
    state: POSState = initialState,
    action: Action<any>
): POSState => {
    switch (action.type) {
        case "posReducer/LOAD_POS_STARTED":
            return { ...state };
        case "posReducer/LOAD_POS_DONE":
            return { ...state, layout: action.payload };
        case "posReducer/LOAD_POS_FAILED":
            console.log(action.payload)

        case "posReducer/SAVE_POS_PREFERENCES_STARTED":
            return { ...state, layout: action.payload };
        case "posReducer/SAVE_POS_PREFERENCES_DONE":
            console.log("Save Complete")
        case "posReducer/SAVE_POS_PREFERENCES_FAILED":
            console.log(action.payload)

        case "posReducer/SET_LOADING_POS":
            return { ...state, isLoadingPOS: action.payload };
        case "posReducer/SET_EDITING_POS":
            return { ...state, isEditingPOS: action.payload };
        default:
            return initialState;
    }
};
