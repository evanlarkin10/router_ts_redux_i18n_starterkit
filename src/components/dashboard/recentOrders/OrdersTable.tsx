import * as React from "react";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Typography from "@material-ui/core/Typography";
import TableRow from "@material-ui/core/TableRow";
import { TranscationDto } from "models/Transaction";
import { OrdersOwnProps } from ".";
import StyledElement from "@common/StyledElement";
import ordersStyles from "./ordersStyles";
import { momentToReadable, floatToCurrency } from "utilities/helpers";
export type OrdersProps = OrdersOwnProps & StyledElement<typeof ordersStyles>;

export default class Orders extends React.Component<OrdersProps, {}> {
  render() {
    const { transactions, classes } = this.props;
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
            {transactions.map((order: TranscationDto, i: number) => {
              return (
                <TableRow key={i}>
                  <TableCell>{momentToReadable(order.createdAt)}</TableCell>
                  <TableCell>{order.payment_method}</TableCell>
                  <TableCell>{order.receipt_items}</TableCell>
                  <TableCell>{floatToCurrency(order.subtotal)}</TableCell>
                  <TableCell>{floatToCurrency(order.tax)}</TableCell>
                  <TableCell align="right">
                    {floatToCurrency(order.total)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="javascript:;">
            See more orders
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
