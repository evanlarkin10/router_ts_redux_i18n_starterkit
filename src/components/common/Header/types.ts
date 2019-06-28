import headerStyles from "./headerStyles";
import { HeaderDispatchProps, HeaderStateProps } from "./Header";
import StyledElement from "../StyledElement";
export type HeaderProps = HeaderDispatchProps &
  HeaderStateProps &
  StyledElement<typeof headerStyles>;
