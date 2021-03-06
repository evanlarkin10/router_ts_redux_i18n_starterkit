import Drawer, { DrawerStateProps, DrawerDispatchProps } from "./Drawer";
import { connects } from "utilities/commonHocs";
import drawerStyles from "./drawerStyles";
import { closeDrawer } from "./actions";
import { selectDrawerState } from "./selectors";
import { ApplicationState } from "reducer";

const mapStateToProps = (state: ApplicationState): DrawerStateProps => ({
  drawerOpen: selectDrawerState(state)
});

const mapDispatchToProps: DrawerDispatchProps = {
  closeDrawer
};
const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  styles: drawerStyles
};

export default connects<{}, DrawerStateProps, DrawerDispatchProps>(
  Drawer,
  hocs
);
