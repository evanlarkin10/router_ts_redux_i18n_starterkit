import { EXAMPLE_REDUCER_NAME } from "components/common/exampleComponent/constants";
import {
  ExampleState,
  exampleReducer
} from "components/common/exampleComponent/reducer";
import { DrawerState, drawerReducer } from "@common/Drawer/reducer";
import { DRAWER_REDUCER_NAME } from "@common/Drawer/constants";
import { UserState, userReducer } from "redux/UserAPI/reducer";
import { USER_REDUCER_NAME } from "redux/UserAPI/constants";
export interface ApplicationState {
  [EXAMPLE_REDUCER_NAME]: ExampleState;
  [DRAWER_REDUCER_NAME]: DrawerState;
  [USER_REDUCER_NAME]: UserState;
}

export const rootReducer = {
  [EXAMPLE_REDUCER_NAME]: exampleReducer,
  [DRAWER_REDUCER_NAME]: drawerReducer,
  [USER_REDUCER_NAME]: userReducer
};
