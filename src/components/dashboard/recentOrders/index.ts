import { connects } from "utilities/commonHocs";
import OrdersTable from "./OrdersTable";
import Transaction from "models/Transaction";
import ordersStyles from "./ordersStyles";

export interface OrdersOwnProps {
  transactions: Transaction[];
}
const hocs = {
  styles: ordersStyles
};

export default connects<OrdersOwnProps>(OrdersTable, hocs);
