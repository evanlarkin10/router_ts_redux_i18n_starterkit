import * as React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TablePagination,
  TableFooter,
  Typography,
  TableHead,
  TableCell,
  TableBody,
  Table,
  IconButton,
  TableRow
} from "@material-ui/core";
import {
  ExpandMore,
  FirstPage,
  KeyboardArrowRight,
  KeyboardArrowLeft,
  LastPage
} from "@material-ui/icons";
import { TranscationDto } from "models/Transaction";
import { OrdersOwnProps } from ".";
import StyledElement from "@common/StyledElement";
import ordersStyles from "./ordersStyles";
import { momentToReadable, floatToCurrency } from "utilities/helpers";
import { ReceiptItem } from "../../pos/types";

export type OrdersProps = OrdersOwnProps & StyledElement<typeof ordersStyles>;
export interface OrdersState {
  rows: any[];
  rowsPerPage: number;
  page: any;
  count: any;
}

export default class Orders extends React.Component<OrdersProps, OrdersState> {
  constructor(props: OrdersProps) {
    super(props);
    this.state = {
      rows: [],
      rowsPerPage: 5,
      page: 0,
      count: 7
    };
  }

  handleFirstPageButtonClick() {
    this.setState({ page: 0 });
  }

  handleBackButtonClick() {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  }

  handleNextButtonClick() {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  }

  handleLastPageButtonClick() {
    const { count, rowsPerPage } = this.state;
    this.setState({ page: Math.max(0, Math.ceil(count / rowsPerPage) - 1) });
  }

  handleChangePage(
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) {
    this.setState({ page: newPage });
    console.log(event);
  }

  handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  }

  render() {
    const { transactions, classes } = this.props;
    const { page, rowsPerPage, count } = this.state;
    const emptyRows = 0;
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Transactions
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Tax</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order: TranscationDto, i: number) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{momentToReadable(order.createdAt)}</TableCell>
                    <TableCell>{order.payment_method}</TableCell>
                    <TableCell>
                      <ExpansionPanel>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>
                            Order Details
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <div className={classes.orderDetail}>
                            {JSON.parse(order.receipt_items).map(
                              (item: ReceiptItem, i: number) => (
                                <div key={i}>
                                  <Typography>
                                    {item.title +
                                      " - " +
                                      floatToCurrency(item.amount)}
                                  </Typography>
                                </div>
                              )
                            )}
                          </div>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </TableCell>
                    <TableCell>{floatToCurrency(order.subtotal)}</TableCell>
                    <TableCell>{floatToCurrency(order.tax)}</TableCell>
                    <TableCell align="right">
                      {floatToCurrency(order.total)}
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow style={{ alignItems: "right", alignContent: "right" }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={this.props.transactions.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={this.handleChangePage.bind(this)}
                onChangeRowsPerPage={this.handleChangeRowsPerPage.bind(this)}
                ActionsComponent={() => {
                  return (
                    <div className={classes.root}>
                      <IconButton
                        onClick={this.handleFirstPageButtonClick.bind(this)}
                        disabled={page === 0}
                        aria-label="first page"
                      >
                        <FirstPage />
                      </IconButton>
                      <IconButton
                        onClick={this.handleBackButtonClick.bind(this)}
                        disabled={page === 0}
                        aria-label="previous page"
                      >
                        <KeyboardArrowLeft />
                      </IconButton>
                      <IconButton
                        onClick={this.handleNextButtonClick.bind(this)}
                        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                        aria-label="next page"
                      >
                        <KeyboardArrowRight />
                      </IconButton>
                      <IconButton
                        onClick={this.handleLastPageButtonClick.bind(this)}
                        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                        aria-label="last page"
                      >
                        <LastPage />
                      </IconButton>
                    </div>
                  );
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </React.Fragment>
    );
  }
}
