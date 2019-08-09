import { connects } from "utilities/commonHocs";
import Chart from "./Chart";
import Transaction from "models/Transaction";
export interface ChartOwnProps {
  transactions: Transaction[];
}
export default connects<ChartOwnProps>(Chart);
