import drawerStyles from "./drawerStyles";
import { DrawerDispatchProps, DrawerStateProps } from "./Drawer";
import StyledElement from "../StyledElement";
export type DrawerProps = DrawerDispatchProps &
  DrawerStateProps &
  StyledElement<typeof drawerStyles>;
