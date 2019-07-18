import actionCreatorFactory from 'typescript-fsa';
import { DRAWER_REDUCER_NAME } from "./constants";

const actionCreator = actionCreatorFactory(DRAWER_REDUCER_NAME)

export enum ActionType {
  OPEN_DRAWER = "OPEN_DRAWER",
  CLOSE_DRAWER = "CLOSE_DRAWER"
}

export const openDrawer = actionCreator<void>(
  ActionType.OPEN_DRAWER
)
export const closeDrawer = actionCreator<void>(
  ActionType.CLOSE_DRAWER
)