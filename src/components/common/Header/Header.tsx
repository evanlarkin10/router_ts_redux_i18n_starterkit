import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import { openDrawer } from "../drawer/actions";
import { HeaderProps } from "./types";
import clsx from "clsx";
import { I18n, Auth } from "aws-amplify";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import * as Cookies from "js-cookie";

export interface HeaderStateProps {
  drawerOpen: boolean;
}
export interface HeaderState {
  anchorAccount: any;
}
export interface HeaderDispatchProps {
  openDrawer: typeof openDrawer;
}
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      anchorAccount: null
    };
  }
  handleDrawerOpen = () => {
    this.props.openDrawer();
  };
  signOut = () => {
    Cookies.remove(COOKIE_USER_KEY);
    Auth.signOut();
    this.props.history.push("/");
  };
  handleAccountMenuOpen = (event: any) => {
    this.setState({ anchorAccount: event.target });
  };
  handleAccountMenuClose = () => {
    this.setState({ anchorAccount: null });
  };
  render() {
    const { classes, drawerOpen } = this.props;
    const { anchorAccount } = this.state;
    return (
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={() => this.props.openDrawer()}
            className={clsx(
              classes.menuButton,
              drawerOpen && classes.menuButtonHidden
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
            {I18n.get(this.props.location.pathname.split("/")[1])}
          </Typography>
          <IconButton color="inherit" onClick={this.handleAccountMenuOpen}>
            <Badge color="secondary">
              <AccountCircleIcon />
            </Badge>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorAccount}
            keepMounted
            open={Boolean(anchorAccount)}
            onClose={this.handleAccountMenuClose}
          >
            <MenuItem
              onClick={() => {
                this.setState({ anchorAccount: null });
                this.props.history.push("/account");
              }}
            >
              {I18n.get("my_account")}
            </MenuItem>
            <MenuItem onClick={this.signOut}>{I18n.get("logout")}</MenuItem>
          </Menu>

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
