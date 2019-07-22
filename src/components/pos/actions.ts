import actionCreatorFactory from "typescript-fsa";
import { POS_REDUCER_NAME } from "./constants";
import { Layout } from "react-grid-layout";
import User from "models/User";
const actionCreator = actionCreatorFactory(POS_REDUCER_NAME);
export enum ActionType {
  SET_LOADING_POS = "SET_LOADING_POS",
  SET_EDITING_POS = "SET_EDITING_POS",
  SAVE_POS_PREFERENCES = "SAVE_POS_PREFERENCES",
  OPEN_PAYMENT_TYPE_MODAL = "OPEN_PAYMENT_TYPE_MODAL",
  CLOSE_PAYMENT_TYPE_MODAL = "CLOSE_PAYMENT_TYPE_MODAL",
  OPEN_ADD_MODAL_BUTTON = "OPEN_ADD_MODAL_BUTTON",
  CLOSE_ADD_MODAL_BUTTON = "CLOSE_ADD_MODAL_BUTTON"
}

export const setLoadingPOS = actionCreator<Boolean>(ActionType.SET_LOADING_POS);
export const setEditingPOS = actionCreator<Boolean>(ActionType.SET_EDITING_POS);
export const savePOSPreferences = actionCreator.async<Layout, User, string>(
  ActionType.SAVE_POS_PREFERENCES
);
export const openPaymentTypeModal = actionCreator<void>(
  ActionType.OPEN_PAYMENT_TYPE_MODAL
);
export const closePaymentTypeModal = actionCreator<void>(
  ActionType.CLOSE_PAYMENT_TYPE_MODAL
);
export const openAddButtonModal = actionCreator<void>(
  ActionType.OPEN_ADD_MODAL_BUTTON
);
export const closeAddButtonModal = actionCreator<void>(
  ActionType.CLOSE_ADD_MODAL_BUTTON
);
