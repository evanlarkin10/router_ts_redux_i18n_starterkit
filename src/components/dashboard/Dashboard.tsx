import * as React from "react";
import User from "models/User";
import { loadTransactions } from "redux/TransactionAPI/actions";
import dashboardStyles from "./dashboardStyles";
import StyledElement from "components/common/StyledElement";
import LoadingIndicator from "@common/loadingIndicator";
import { Typography } from "@material-ui/core";

interface DashboardState {
  stateItem: string;
}

export interface DashboardStateProps {
  transactions: Array<Object>;
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
    return (
      <>
        {this.props.isLoadingTransactions && <LoadingIndicator />}

        {!this.props.isLoadingTransactions &&
          this.props.transactions.map((item, i) => (
            <Typography key={i}>{item.toString()}</Typography>
          ))}
      </>
    );
  }
}

export default Dashboard;
