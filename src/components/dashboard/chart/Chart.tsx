import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { Typography } from "@material-ui/core";
import { ChartOwnProps } from "./index";
import * as moment from "moment";
import WeekPicker from "@common/weekPicker";
import { endOfWeek, startOfWeek } from "date-fns";
import { I18n } from "aws-amplify";
export type ChartProps = ChartOwnProps;
export interface ChartState {
  data: { time: any; "Total Sales": number }[];
}
export default class Chart extends React.Component<ChartProps, ChartState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: this.setData(startOfWeek(new Date()), endOfWeek(new Date()))
    };
  }
  sumTransactions(list: any[]) {
    return list.reduce((a, b) => a + (b["total"] || 0), 0);
  }
  createData(time: any, amount: any) {
    return { time, "Total Sales": amount };
  }
  setData(start: Date, end: Date) {
    const weeklyTransactions = this.props.transactions.filter(
      transactions =>
        new Date(transactions.createdAt) > start &&
        new Date(transactions.createdAt) < end
    );
    const mon = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 1
    );
    const tues = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 2
    );
    const wed = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 3
    );
    const thur = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 4
    );
    const fri = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 5
    );
    const sat = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 6
    );
    const sun = weeklyTransactions.filter(
      transaction => moment(transaction.createdAt).isoWeekday() === 7
    );
    const data = [
      this.createData("Sun", this.sumTransactions(sun)),
      this.createData("Mon", this.sumTransactions(mon)),
      this.createData("Tues", this.sumTransactions(tues)),
      this.createData("Wed", this.sumTransactions(wed)),
      this.createData("Thur", this.sumTransactions(thur)),
      this.createData("Fri", this.sumTransactions(fri)),
      this.createData("Sat", this.sumTransactions(sat))
    ];
    return data;
  }
  onWeekChange(start: Date, end: Date) {
    const data = this.setData(start, end);
    this.setState({ data });
  }
  render() {
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {I18n.get("weekly_sales")}
        </Typography>
        <WeekPicker
          onWeekChange={(start: Date, end: Date) =>
            this.onWeekChange(start, end)
          }
        />
        <ResponsiveContainer>
          <LineChart
            data={this.state.data}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24
            }}
          >
            <XAxis dataKey="time" />
            <YAxis>
              <Label
                angle={270}
                position="left"
                style={{ textAnchor: "middle" }}
              >
                Sales($)
              </Label>
            </YAxis>
            <Tooltip />
            <Legend />
            <Line
              dot={{ stroke: "red", strokeWidth: 2 }}
              type="monotone"
              dataKey="Total Sales"
              stroke="#556CD6"
            />
          </LineChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}
