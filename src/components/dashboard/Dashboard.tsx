import * as React from "react";
import User from "models/User";
import { loadTransactions } from "redux/TransactionAPI/actions";
import dashboardStyles from "./dashboardStyles";
import StyledElement from "components/common/StyledElement";
import LoadingIndicator from "@common/loadingIndicator";
import { Container, Grid, Paper } from "@material-ui/core";
import Orders from "./recentOrders";
import Chart from "./chart";
import TotalSales from "./totalSales";
import Transaction from "models/Transaction";
import clsx from "clsx";
interface DashboardState {
  stateItem: string;
}

export interface DashboardStateProps {
  transactions: Array<Transaction>;
  isLoadingTransactions: boolean;
  user: User;
}
export interface DashboardDispatchProps {
  loadTransactions: typeof loadTransactions.started;
}
type DashboardProps = DashboardDispatchProps &
  DashboardStateProps &
  StyledElement<typeof dashboardStyles>;
class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
  }
  componentDidMount() {
    this.props.loadTransactions();
  }
  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <>
        {this.props.isLoadingTransactions && <LoadingIndicator />}

        {!this.props.isLoadingTransactions && (
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Chart transactions={this.props.transactions} />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <TotalSales transactions={this.props.transactions} />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders transactions={this.props.transactions} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        )}
      </>
    );
  }
}

export default Dashboard;
