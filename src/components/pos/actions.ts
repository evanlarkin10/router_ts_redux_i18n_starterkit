import actionCreatorFactory from 'typescript-fsa';
import { POS_REDUCER_NAME } from "./constants";
import { Layout } from 'react-grid-layout';

const actionCreator = actionCreatorFactory(POS_REDUCER_NAME)
export enum ActionType {
    SET_LOADING_POS = "SET_LOADING_POS",
    SET_EDITING_POS = "SET_EDITING_POS",
    LOAD_POS = "LOAD_POS",
    SAVE_POS_PREFERENCES = "SAVE_POS_PREFERENCES"
}



export const setLoadingPOS = actionCreator<Boolean>(
    ActionType.SET_LOADING_POS
)
export const setEditingPOS = actionCreator<Boolean>(
    ActionType.SET_EDITING_POS
)

export const loadPOS = actionCreator.async<void, string, string>(
    ActionType.LOAD_POS
)

export const savePOSPreferences = actionCreator.async<Layout, void, string>(
    ActionType.SAVE_POS_PREFERENCES
)