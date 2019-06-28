import authStyles from '../common/authStyles'
import StyledElement from "@common/StyledElement";

export interface SignInOwnProps {
  switchComponent: (status: any) => void;
}

export type SignInProps = SignInOwnProps & StyledElement<typeof authStyles>;
