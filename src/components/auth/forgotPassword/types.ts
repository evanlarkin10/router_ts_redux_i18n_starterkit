import authStyles from '../common/authStyles'
import StyledElement from "@common/StyledElement";

export interface ForgotPasswordOwnProps {
  switchComponent: (status: any) => void;
}

export type ForgotPasswordProps = ForgotPasswordOwnProps & StyledElement<typeof authStyles>;
