import * as React from "react";
import { I18n } from "aws-amplify";
import * as _ from "lodash";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  Paper,
  Fab,
  TextField,
  Card,
  CardContent,
  Typography,
  Tooltip,
  Toolbar,
  Divider
} from "@material-ui/core";
import { Add, Save, Cancel, Edit } from "@material-ui/icons";
import { POSProps, POSState, ReceiptItem } from "./types";
import { Responsive, WidthProvider } from "react-grid-layout";
// import WidthProvider = RGL.WidthProvider;
// import Layout = RGL.Layout
import { floatToCurrency, calculateHST } from "utilities/helpers";
import LoadingIndicator from "@common/loadingIndicator";
import { BUTTON_HEIGHT, CASH_TEND_BTN, CUSTOM_CHARGE_BTN } from "./constants";
import AddButtonModal from "./addButtonModal";
import PaymentTypeModal from "./paymentTypeModal";

const ResponsiveGridLayout = WidthProvider(Responsive);

class POS extends React.Component<POSProps, POSState> {
  static defaultProps = {
    className: "layout",
    cols: { lg: 10, md: 8, sm: 6 },
    breakpoints: { lg: 1200, md: 800, sm: 400 },
    rowHeight: BUTTON_HEIGHT
  };

  constructor(props: any) {
    super(props);
    this.state = {
      items: this.props.layouts.lg,
      cols: null,
      breakpoint: null,
      layouts: this.props.layouts,
      layout: this.props.layouts.lg,
      isEditing: false,
      amount: "",
      total: 0.0,
      receiptItems: []
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onProcessTransaction = this.onProcessTransaction.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }
  createElement(el: any) {
    const i = el.add ? "+" : el.i;
    const { classes } = this.props;
    return (
      <div key={i} data-grid={el} className={classes.gridItem}>
        {el.static ? this.renderStaticButton(el) : this.renderMobileButton(el)}
      </div>
    );
  }

  renderStaticButton(el: any) {
    const { classes } = this.props;
    const isNumber = el.i === CASH_TEND_BTN || el.i === CUSTOM_CHARGE_BTN;
    if (el.i === CASH_TEND_BTN) {
      return (
        <>
          <Card className={classes.card} onClick={() => this.amountTendered()}>
            <CardContent className={classes.cardContent}>
              <Typography
                className={isNumber ? classes.title : classes.number}
                align="center"
                display="block"
              >
                {el.i}
              </Typography>
            </CardContent>
          </Card>
        </>
      );
    }
    return (
      <>
        <Card
          className={classes.card}
          onClick={
            el.i === CUSTOM_CHARGE_BTN
              ? () => this.addCustomCharge()
              : () =>
                  this.setState({
                    amount: this.state.amount + el.i
                  })
          }
        >
          <CardContent className={classes.cardContent}>
            <Typography
              className={isNumber ? classes.title : classes.number}
              align="center"
              display="block"
            >
              {el.i}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
  renderMobileButton(el: any) {
    const { classes } = this.props;
    return (
      <>
        <Card
          className={classes.card}
          onClick={() =>
            this.addButtonCharge({ amount: el.amount, label: el.i })
          }
        >
          <CardContent className={classes.cardContent}>
            {this.state.isEditing && (
              <Typography
                variant={"button"}
                className={classes.deleteButton}
                onClick={() => this.onRemoveItem(el.i)}
              >
                X
              </Typography>
            )}
            <Typography
              className={classes.title}
              align="center"
              display="block"
            >
              {el.i}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
  addCustomCharge() {
    if (this.state.amount && !this.state.isEditing) {
      const receipt = this.state.receiptItems;
      const subtotal = parseFloat(this.state.amount) + this.state.total;
      receipt.push({ amount: parseFloat(this.state.amount), title: "Custom" });
      this.setState({
        total: subtotal,
        receiptItems: receipt,
        amount: ""
      });
    }
  }
  addButtonCharge(item: { label: string; amount: number }) {
    const receipt = this.state.receiptItems;
    console.log(item);
    const subtotal = this.state.total;
    // Override button price if one is entered
    if (this.state.amount !== "") {
      receipt.push({
        amount: parseFloat(this.state.amount),
        title: item.label
      });
    } else {
      receipt.push({ amount: item.amount, title: item.label });
    }
    this.setState({
      total: subtotal,
      receiptItems: receipt,
      amount: ""
    });
  }
  onAddItem(label: string, amount: number) {
    /*eslint no-console: 0*/
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        amount,
        i: label,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 1,
        h: 1
      })
    });
    const newItem = this.state.items[this.state.items.length - 1];
    this.setState({ layout: this.state.layout.concat(newItem) });
  }
  renderReceipt(el: ReceiptItem, index: number) {
    const { classes } = this.props;
    return (
      <div key={index}>
        <Typography className={classes.receiptTitle}>{el.title}</Typography>
        <Typography className={classes.receiptAmount}>
          {floatToCurrency(el.amount)}
        </Typography>
        <br />
      </div>
    );
  }
  onLayoutChange(layout: any, layouts: any) {
    // this.props.onLayoutChange(layout);
    console.log("ON CHANGE\nLayout", layout, "\nLAYOUTS", layouts);
    this.setState({ layout });
  }
  onBreakpointChange(breakpoint: any, cols: any) {
    console.log("BREAKPOINT");
    this.setState({
      breakpoint,
      cols
    });
  }

  amountTendered() {
    console.log("Total", this.state.total);
    this.props.openPaymentTypeModal();
  }
  onProcessTransaction(paymentMethod: any) {
    const total = this.state.total + calculateHST(this.state.total);
    console.log("total", total, "method", paymentMethod);
    this.setState({
      total: 0,
      amount: "",
      receiptItems: []
    });
  }
  async saveLayout() {
    try {
      this.props.savePOSPreferences(this.state.layouts);
      this.props.setLoading(true);
      this.setState({ isEditing: false });
    } catch {
      console.log("Error saving");
    }
    /* finally {
      window.location.reload()
      console.log("finally");
    } */
  }

  onRemoveItem(i: any) {
    console.log("removing", i);
    this.setState({
      items: _.reject(this.state.items, { i }),
      layout: _.reject(this.state.items, { i })
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        {!this.props.isLoadingPOS && (
          <>
            <TextField
              id="outlined-bare"
              className={classes.amountField}
              disabled={true}
              value={"$" + this.state.amount}
              margin="normal"
              variant="outlined"
              InputProps={{
                className: classes.cashField
              }}
              inputProps={{ "aria-label": "bare" }}
            />
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <Paper className={classes.receipt}>
                  {_.map(this.state.receiptItems, (el, index) =>
                    this.renderReceipt(el, index)
                  )}
                  {this.state.receiptItems.length > 0 && (
                    <>
                      <Typography className={classes.receiptTitle}>
                        {I18n.get("tax_type")}
                      </Typography>
                      <Typography className={classes.receiptAmount}>
                        {floatToCurrency(calculateHST(this.state.total))}
                      </Typography>
                    </>
                  )}
                  <br />
                  <br />
                  <Divider />
                  <Typography style={{ float: "right" }}>
                    Total:{" "}
                    {floatToCurrency(
                      this.state.total + calculateHST(this.state.total)
                    )}
                  </Typography>
                </Paper>
              </div>
              <div style={{ flex: 9 }}>
                <ResponsiveGridLayout
                  onLayoutChange={(layout, layouts) =>
                    this.onLayoutChange(layout, layouts)
                  }
                  onBreakpointChange={this.onBreakpointChange}
                  breakpoints={{ lg: 1200, md: 800, sm: 400 }}
                  cols={{ lg: 10, md: 8, sm: 6 }}
                  {...this.props}
                >
                  {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveGridLayout>
                <AddButtonModal
                  addToPOS={(label: string, amount: number) =>
                    this.onAddItem(label, amount)
                  }
                />
                <PaymentTypeModal
                  processTransaction={(paymentMethod: any) =>
                    this.onProcessTransaction(paymentMethod)
                  }
                />
              </div>
              <div style={{ flex: 0.7 }}>
                <Toolbar className={classes.toolbar}>
                  {this.state.isEditing ? (
                    <>
                      <Tooltip title={"Add"}>
                        <Fab
                          color="primary"
                          aria-label="Add"
                          className={classes.fab}
                          onClick={() => this.props.openAddModal()}
                        >
                          <Add />
                        </Fab>
                      </Tooltip>
                      <Tooltip title={"Save"}>
                        <Fab
                          color="primary"
                          aria-label="Save"
                          className={classes.fab}
                          onClick={() => this.saveLayout()}
                        >
                          <Save />
                        </Fab>
                      </Tooltip>
                      <Tooltip title={"Cancel"}>
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
                          <Cancel />
                        </Fab>
                      </Tooltip>
                    </>
                  ) : (
                    <>
                      <Tooltip title={"Edit"}>
                        <Fab
                          color="primary"
                          aria-label="Edit"
                          className={classes.fab}
                          onClick={() => this.setState({ isEditing: true })}
                        >
                          <Edit />
                        </Fab>
                      </Tooltip>
                    </>
                  )}
                </Toolbar>
              </div>
            </div>
          </>
        )}
        {this.props.isLoadingPOS && <LoadingIndicator />}
      </>
    );
  }
}

export default POS;
