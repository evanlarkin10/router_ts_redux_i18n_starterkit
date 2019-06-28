import authStyles from '../common/authStyles'
import StyledElement from "@common/StyledElement";

export interface VerifyOwnProps {
  switchComponent: (status: any) => void;
}

export type VerifyProps = VerifyOwnProps & StyledElement<typeof authStyles>;
