import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Transaction from "models/Transaction";
import StyledElement from "@common/StyledElement";
import totalSalesStyles from "./totalSalesStyles";
import { floatToCurrency, momentToReadableDateOnly } from "utilities/helpers";
import * as moment from "moment";
import { I18n } from "aws-amplify";
export interface TotalSalesOwnProps {
  transactions: Transaction[];
}
export type TotalSalesProps = TotalSalesOwnProps &
  StyledElement<typeof totalSalesStyles>;

// tslint:disable
const Deposits = (props: TotalSalesProps) => {
  const { classes, transactions } = props;
  const todayTransactions = transactions.filter(transactions =>
    moment(transactions.createdAt).isSame(moment(), "day")
  );
  const sum = todayTransactions.reduce((a, b) => a + (b["total"] || 0), 0);

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {I18n.get("today_sales")}
      </Typography>
      <Typography component="p" variant="h4">
        {floatToCurrency(sum)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {momentToReadableDateOnly(moment().toString())}
      </Typography>
    </React.Fragment>
  );
};

export default Deposits;
