import IconButton from "@material-ui/core/IconButton";
import { Drawer as MUIDrawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { closeDrawer } from "./actions";
import { secondaryListItems } from "./ListItems";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import Icon from '@material-ui/core/Icon';
import LayersIcon from "@material-ui/icons/Layers";
import { I18n } from "aws-amplify";
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
    this.forceUpdate();
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
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon
                  onClick={() => this.props.history.push("/dashboard")}
                />
              </ListItemIcon>
              <ListItemText
                primary={I18n.get("dashboard")}
                onClick={() => this.props.history.push("/dashboard")}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon
                  onClick={() => this.props.history.push("/employees")}
                />
              </ListItemIcon>
              <ListItemText
                primary={I18n.get("employees")}
                onClick={() => this.props.history.push("/employees")}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Icon className={"fa fa-cash-register"} onClick={() => this.props.history.push("/pos")} />

              </ListItemIcon>
              <ListItemText
                primary={I18n.get("point_of_sale")}
                onClick={() => this.props.history.push("/pos")}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText
                primary="Integrations"
              />
            </ListItem>
          </div>
        </List>
        <Divider />
        <List>{secondaryListItems}</List>
      </MUIDrawer>
    );
  }
}

export default Drawer;
