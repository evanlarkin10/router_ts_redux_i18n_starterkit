import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { openDrawer } from "../Drawer/actions";
import { HeaderProps } from "./types";
import clsx from "clsx";
import * as React from "react";

export interface HeaderStateProps {
  drawerOpen: boolean;
}
export interface HeaderDispatchProps {
  openDrawer: typeof openDrawer;
}
class Header extends React.Component<HeaderProps, {}> {
  handleDrawerOpen = () => {
    this.props.openDrawer();
  };
  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={() => this.props.openDrawer()}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
