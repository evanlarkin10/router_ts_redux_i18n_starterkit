import authStyles from '../common/authStyles'
import StyledElement from "@common/StyledElement";

export interface PricingOwnProps {
  switchComponent: (status: any) => void;
}

export type PricingProps = PricingOwnProps & StyledElement<typeof authStyles>;
