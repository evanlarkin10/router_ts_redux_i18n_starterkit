import authStyles from "../common/authStyles";
import StyledElement from "@common/StyledElement";
import { setUser } from "redux/UserAPI/actions"
export interface SignInOwnProps {
  switchComponent: (status: any) => void;
}

export interface SignInDispatchProps {
  setUser: typeof setUser
}
export type SignInProps = SignInOwnProps & SignInDispatchProps & StyledElement<typeof authStyles>;
