import { connects } from "utilities/commonHocs";
import TotalSales, { TotalSalesOwnProps } from "./TotalSales";
import Transaction from "models/Transaction";
import totalSalesStyles from "./totalSalesStyles";
export interface TotalProps {
  transactions: Transaction[];
}
const hocs = {
  styles: totalSalesStyles
};
export default connects<TotalSalesOwnProps>(TotalSales, hocs);
