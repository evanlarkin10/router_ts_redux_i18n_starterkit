import IconButton from "@material-ui/core/IconButton";
import { Drawer as MUIDrawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { closeDrawer } from "./actions";
import { mainListItems, secondaryListItems } from "./ListItems";
import { DrawerProps } from "./types";
import clsx from "clsx";
import * as React from "react";

export interface DrawerStateProps {
  drawerOpen: boolean;
}
export interface DrawerDispatchProps {
  closeDrawer: typeof closeDrawer;
}
class Drawer extends React.Component<DrawerProps, {}> {
  handleDrawerClose = () => {
    this.props.closeDrawer();
  };
  render() {
    const { classes } = this.props;
    return (
      <MUIDrawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !this.props.drawerOpen && classes.drawerPaperClose
          )
        }}
        open={this.props.drawerOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => this.props.closeDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </MUIDrawer>
    );
  }
}

export default Drawer;
