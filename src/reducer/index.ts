import { EXAMPLE_REDUCER_NAME } from "components/common/exampleComponent/constants";
import {
  ExampleState,
  exampleReducer
} from "components/common/exampleComponent/reducer";
import { DrawerState, drawerReducer } from "@common/drawer/reducer";
import { DRAWER_REDUCER_NAME } from "@common/drawer/constants";
import { UserState, userReducer } from "redux/UserAPI/reducer";
import { USER_REDUCER_NAME } from "redux/UserAPI/constants";
import { AUTH_REDUCER_NAME } from 'components/auth/constants'
import { AuthState, authReducer } from 'components/auth/reducer'
export interface ApplicationState {
  [EXAMPLE_REDUCER_NAME]: ExampleState;
  [DRAWER_REDUCER_NAME]: DrawerState;
  [USER_REDUCER_NAME]: UserState;
  [AUTH_REDUCER_NAME]: AuthState;
}

export const rootReducer = {
  [EXAMPLE_REDUCER_NAME]: exampleReducer,
  [DRAWER_REDUCER_NAME]: drawerReducer,
  [USER_REDUCER_NAME]: userReducer,
  [AUTH_REDUCER_NAME]: authReducer
};
