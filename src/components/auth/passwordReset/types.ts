import authStyles from '../common/authStyles'
import StyledElement from "@common/StyledElement";

export interface PasswordResetOwnProps {
  switchComponent: (status: any) => void;
}

export type PasswordResetProps = PasswordResetOwnProps & StyledElement<typeof authStyles>;
