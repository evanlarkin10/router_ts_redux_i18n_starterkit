import { setTrue, setFalse } from "./actions";
import myAccountStyles from "./myAccountStyles";
import StyledElement from "../common/StyledElement";
import User from "models/User";

export interface MyAccountStateProps {
  user: User;
}
export interface MyAccountDispatchProps {
  setTrue: typeof setTrue;
  setFalse: typeof setFalse;
}

export type MyAccountProps = MyAccountStateProps &
  MyAccountDispatchProps &
  StyledElement<typeof myAccountStyles>;
