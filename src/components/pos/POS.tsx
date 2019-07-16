import * as React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import * as _ from "lodash";
import 'react-grid-layout/css/styles.css'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import 'react-resizable/css/styles.css'
import { registerButtons, POSProps } from './types'
const ResponsiveReactGridLayout = WidthProvider(Responsive);
// const originalLayouts = getFromLS("layouts") || {};
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
export interface POSState {
  newCounter: number;
  items: any[];
  cols: any;
  layout: any;
  layouts: any;
  breakpoint: any;
}

class POS extends React.Component<POSProps, POSState> {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100
  };

  constructor(props: any) {
    super(props);

    this.state = {
      items: registerButtons,
      newCounter: 1,
      cols: null,
      breakpoint: null,
      layout: null,
      layouts: JSON.parse(JSON.stringify({})) // originalLayouts))
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
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

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint: any, cols: any) {
    this.setState({
      breakpoint,
      cols
    });
  }

  onLayoutChange(layout: any, layouts: any) {
    // this.props.onLayoutChange(layout);
    console.log('Layout change', layout, layouts)
    // saveToLS("layouts", layouts);
    this.setState({ layout });
  }

  onRemoveItem(i: any) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i }) });
  }

  render() {
    console.log(this.state.layout)
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout
          onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

/* function getFromLS(key: any) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      // Ignore
    }
  }
  return ls[key];
}

function saveToLS(key: any, value: any) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
 */

export default POS;