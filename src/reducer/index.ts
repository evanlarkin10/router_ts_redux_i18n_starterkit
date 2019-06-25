import { EXAMPLE_REDUCER_NAME } from "components/common/exampleComponent/constants";
import {
  ExampleState,
  exampleReducer
} from "components/common/exampleComponent/reducer";
export interface ApplicationState {
  [EXAMPLE_REDUCER_NAME]: ExampleState;
}

export const rootReducer = {
  [EXAMPLE_REDUCER_NAME]: exampleReducer
};
