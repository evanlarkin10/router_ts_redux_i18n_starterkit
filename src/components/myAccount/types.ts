import { setTrue, setFalse } from "./actions";
import myAccountStyles from "./myAccountStyles";
import StyledElement from "../common/StyledElement";

export interface MyAccountStateProps {
  myBool: boolean;
}
export interface MyAccountDispatchProps {
  setTrue: typeof setTrue;
  setFalse: typeof setFalse;
}

export type MyAccountProps = MyAccountStateProps &
  MyAccountDispatchProps &
  StyledElement<typeof myAccountStyles>;
