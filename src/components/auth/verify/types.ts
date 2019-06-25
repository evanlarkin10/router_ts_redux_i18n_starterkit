import verifyStyles from "./verifyStyles";
import StyledElement from "@common/StyledElement";

export interface VerifyOwnProps {
  switchComponent: (status: any) => void;
}

export type VerifyProps = VerifyOwnProps & StyledElement<typeof verifyStyles>;
