import forgotPasswordStyles from "./forgotPasswordStyles";
import StyledElement from "@common/StyledElement";

export interface ForgotPasswordOwnProps {
  switchComponent: (status: any) => void;
}

export type ForgotPasswordProps = ForgotPasswordOwnProps & StyledElement<typeof forgotPasswordStyles>;
