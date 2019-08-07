import { connects } from "utilities/commonHocs";
import Dashboard, {
  DashboardStateProps,
  DashboardDispatchProps
} from "./Dashboard";
import { ApplicationState } from "reducer";
import { selectUser } from "redux/UserAPI/selectors";
import {
  selectTransactions,
  selectLoadingTransactions
} from "redux/TransactionAPI/selectors";
import { loadTransactions } from "redux/TransactionAPI/actions";
import dashboardStyles from "./dashboardStyles";

const mapStateToProps = (state: ApplicationState): DashboardStateProps => ({
  transactions: selectTransactions(state),
  isLoadingTransactions: selectLoadingTransactions(state),
  user: selectUser(state)
});

const mapDispatchToProps: DashboardDispatchProps = {
  loadTransactions: loadTransactions.started
};

const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  i18n: ["common"],
  styles: dashboardStyles
};

export default connects<{}, DashboardStateProps, DashboardDispatchProps>(
  Dashboard,
  hocs
);
