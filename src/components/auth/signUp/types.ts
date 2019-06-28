import authStyles from '../common/authStyles'
import StyledElement from "@common/StyledElement";

export interface SignUpOwnProps {
  switchComponent: (status: any) => void;
}

export type SignUpProps = SignUpOwnProps & StyledElement<typeof authStyles>;
