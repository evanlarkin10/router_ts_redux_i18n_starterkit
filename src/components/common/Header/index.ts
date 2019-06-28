import Header, { HeaderStateProps, HeaderDispatchProps } from "./Header";
import { connects } from "utilities/commonHocs";
import drawerStyles from "./headerStyles";
import { openDrawer } from "../Drawer/actions";
import { selectDrawerState } from "../Drawer/selectors";
import { ApplicationState } from "reducer";

const mapStateToProps = (state: ApplicationState): HeaderStateProps => ({
  drawerOpen: selectDrawerState(state)
});

const mapDispatchToProps: HeaderDispatchProps = {
  openDrawer
};
const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  styles: drawerStyles
};

export default connects<{}, HeaderStateProps, HeaderDispatchProps>(
  Header,
  hocs
);
