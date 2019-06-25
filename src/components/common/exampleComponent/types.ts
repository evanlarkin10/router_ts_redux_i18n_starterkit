import { setTrue, setFalse } from "./actions";
import exampleStyles from "./exampleStyles";
import StyledElement from "../StyledElement";

export interface ExampleStateProps {
  myBool: boolean;
}
export interface ExampleDispatchProps {
  setTrue: typeof setTrue;
  setFalse: typeof setFalse;
}

export type ExampleProps = ExampleStateProps &
  ExampleDispatchProps &
  StyledElement<typeof exampleStyles>;
