import Header, { HeaderStateProps, HeaderDispatchProps } from "./Header";
import { connects } from "utilities/commonHocs";
import headerStyles from "./headerStyles";
import { openDrawer } from "../drawer/actions";
import { selectDrawerState } from "../drawer/selectors";
import { ApplicationState } from "reducer";

const mapStateToProps = (state: ApplicationState): HeaderStateProps => ({
  drawerOpen: selectDrawerState(state)
});

const mapDispatchToProps: HeaderDispatchProps = {
  openDrawer,
};
const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  styles: headerStyles
};

export default connects<{}, HeaderStateProps, HeaderDispatchProps>(
  Header,
  hocs
);
