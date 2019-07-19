import * as React from "react";
import * as _ from "lodash";
import "react-grid-layout/css/styles.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
// import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import "react-resizable/css/styles.css";
import { POSProps } from "./types";
import * as RGL from "react-grid-layout";
import WidthProvider = RGL.WidthProvider;
// import Layout = RGL.Layout

import LoadingIndicator from "@common/loadingIndicator";
import { BUTTON_HEIGHT } from "./constants";
import AddButtonModal from "./addButtonModal";

const ReactGridLayout = WidthProvider(RGL);

export interface POSState {
  newCounter: number;
  items: any[];
  cols: any;
  layout: any[];
  breakpoint: any;
  isEditing: boolean;
}

class POS extends React.Component<POSProps, POSState> {
  static defaultProps = {
    className: "layout",
    cols: 10,
    rowHeight: BUTTON_HEIGHT
  };

  constructor(props: any) {
    super(props);
    this.state = {
      items: this.props.layout,
      newCounter: this.props.layout.length,
      cols: null,
      breakpoint: null,
      layout: this.props.layout,
      isEditing: false
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  createElement(el: any) {
    console.log("Create item");
    const i = el.add ? "+" : el.i;
    const { classes } = this.props;
    return (
      <div key={i} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            {!el.static && this.state.isEditing && (
              <Typography className={classes.deleteButton}>X</Typography>
            )}
            <Typography
              className={el.static ? classes.number : classes.title}
              align="center"
              display="block"
            >
              {i}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  onAddItem(label: string) {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: label,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 1
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.props.layout.length
    }); 
  }

  onLayoutChange(layout: any[]) {
    console.log("Layout change");
    if (this.state.isEditing) {
      this.setState({ layout });
    }
  }
  async saveLayout() {
    try {
      this.props.savePOSPreferences(this.state.layout);
      this.props.setLoading(true);
      this.setState({ isEditing: false });
    } catch {
      console.log("Error saving");
    } finally {
      // window.location.reload()
      console.log("finally");
    }
  }

  onRemoveItem(i: any) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i }) });
  }

  render() {
    console.log("state", this.state.layout, "\nprops", this.props.layout);
    console.log("items", this.state.items);
    const { classes } = this.props;
    return (
      <>
        {!this.props.isLoadingPOS && (
          <div>
            <Toolbar className={classes.toolbar}>
              {this.state.isEditing ? (
                <>
                  <Fab
                    color="primary"
                    aria-label="Add"
                    className={classes.fab}
                    onClick={() => this.props.openAddModal()}
                  >
                    <AddIcon />
                  </Fab>
                  <Fab
                    color="primary"
                    aria-label="Save"
                    className={classes.fab}
                    onClick={() => this.saveLayout()}
                  >
                    <SaveIcon />
                  </Fab>
                  <Fab
                    color="primary"
                    aria-label="Cancel"
                    className={classes.fab}
                    onClick={() =>
                      this.setState({
                        layout: this.props.layout,
                        isEditing: false
                      })
                    }
                  >
                    <CancelIcon />
                  </Fab>
                </>
              ) : (
                <>
                  <Fab
                    color="primary"
                    aria-label="Edit"
                    className={classes.fab}
                    onClick={() => this.setState({ isEditing: true })}
                  >
                    <EditIcon />
                  </Fab>
                </>
              )}
            </Toolbar>

            <ReactGridLayout
              {...this.props}
              className={"layout"}
              layout={this.state.layout}
              onLayoutChange={(layout: any[]) => this.onLayoutChange(layout)}
              // onResize={() => this.onResize()}
              isDraggable={this.state.isEditing}
              isRearrangeable={this.state.isEditing}
              isResizable={this.state.isEditing}
              autoSize={true}
            >
              {_.map(this.state.items, el => this.createElement(el))}
            </ReactGridLayout>
            <AddButtonModal addToPOS={(label: string)=>this.onAddItem(label)}/>
          </div>
        )}
        {this.props.isLoadingPOS && <LoadingIndicator />}
      </>
    );
  }
}

export default POS;
