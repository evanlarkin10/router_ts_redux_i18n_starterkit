import * as React from "react";
import * as _ from "lodash";
import 'react-grid-layout/css/styles.css'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import 'react-resizable/css/styles.css'
import { POSProps } from './types'
import * as RGL from "react-grid-layout";
import WidthProvider = RGL.WidthProvider
// import Layout = RGL.Layout
import LoadingIndicator from "@common/loadingIndicator";
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
    cols: 12,
    rowHeight: 100
  };

  constructor(props: any) {
    super(props);
    this.state = {
      items: this.props.layout,
      newCounter: 1,
      cols: null,
      breakpoint: null,
      layout: this.props.layout,
      isEditing: false
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }
  componentDidMount() {
    console.log("Props on mount", this.props)
  }
  createElement(el: any) {
    const i = el.add ? "+" : el.i;
    const { classes } = this.props
    return (
      <div key={i} data-grid={el} className={classes.gridItem}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title}>
              {i}
            </Typography>
            {!el.static &&
              <Typography className={classes.title}>
                X
            </Typography>
            }
          </CardContent>

        </Card>
      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  onLayoutChange(layout: any[]) {
    if (this.state.isEditing) {
      this.setState({ layout });
    }
  }
  saveLayout() {
    this.props.setLoading(true)
    this.props.savePOSPreferences(this.state.layout)
    this.setState({ isEditing: false })
  }
  onResize() {
    console.log('resize')
  }

  onRemoveItem(i: any) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i }) });
  }

  render() {
    console.log("state", this.state.layout[12].x, "props", this.props.layout[12].x)
    const { classes } = this.props
    return (
      <>
        {
          !this.props.isLoadingPOS &&
          <div style={{ backgroundColor: 'grey' }}>
            <button onClick={this.onAddItem}>Add Item</button>
            <Fab color="primary" aria-label="Edit" className={classes.fab} onClick={() => this.setState({ isEditing: true })}>
              <EditIcon />
            </Fab>
            <Fab color="primary" aria-label="Save" className={classes.fab} onClick={() => this.saveLayout()}>
              <SaveIcon />
            </Fab>
            <ReactGridLayout
              layout={this.state.layout}
              onLayoutChange={(layout: any[]) => this.onLayoutChange(layout)}
              onResize={() => this.onResize()}
              autoSize={true}
              {...this.props}
            >
              {_.map(this.state.items, el => this.createElement(el))}
            </ReactGridLayout>
          </div>
        }
        {
          this.props.isLoadingPOS && <LoadingIndicator />
        }
      </>
    );

  }
}

export default POS;
