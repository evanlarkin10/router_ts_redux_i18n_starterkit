import { EXAMPLE_REDUCER_NAME } from "components/common/exampleComponent/constants";
import {
  ExampleState,
  exampleReducer
} from "components/common/exampleComponent/reducer";
import { DrawerState, drawerReducer } from "components/common/drawer/reducer";
import { DRAWER_REDUCER_NAME } from "components/common/drawer/constants";
import { UserState, userReducer } from "redux/UserAPI/reducer";
import { USER_REDUCER_NAME } from "redux/UserAPI/constants";
import { POSState, posReducer } from "components/pos/reducer";
import { POS_REDUCER_NAME } from "components/pos/constants";
export interface ApplicationState {
  [EXAMPLE_REDUCER_NAME]: ExampleState;
  [DRAWER_REDUCER_NAME]: DrawerState;
  [USER_REDUCER_NAME]: UserState;
  [POS_REDUCER_NAME]: POSState;
}

export const rootReducer = {
  [EXAMPLE_REDUCER_NAME]: exampleReducer,
  [DRAWER_REDUCER_NAME]: drawerReducer,
  [USER_REDUCER_NAME]: userReducer,
  [POS_REDUCER_NAME]: posReducer
};
