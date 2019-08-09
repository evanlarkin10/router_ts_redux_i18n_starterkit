import clsx from "clsx";
import {
  isValid,
  format,
  isSameDay,
  endOfWeek,
  startOfWeek,
  isWithinInterval
} from "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import * as React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// this guy required only on the docs site to work with dynamic date library
import { IconButton } from "@material-ui/core";
import StyledElement from "components/common/StyledElement";
import weekPickerStyles from "./weekPickerStyles";

export interface WeekPickerOwnProps {
  onWeekChange: (start: Date, end: Date) => void;
}
export type WeekPickerProps = StyledElement<typeof weekPickerStyles> &
  WeekPickerOwnProps;

export interface WeekPickerState {
  selectedDate: Date;
}
class WeekPicker extends React.PureComponent<WeekPickerProps, WeekPickerState> {
  constructor(props: WeekPickerProps) {
    super(props);
    this.state = {
      selectedDate: new Date()
    };
  }

  handleWeekChange = (date: any) => {
    this.setState({ selectedDate: startOfWeek(new Date(date)) });
    this.props.onWeekChange(
      startOfWeek(new Date(date)),
      endOfWeek(new Date(date))
    );
  };

  formatWeekSelectLabel = (date: any, invalidLabel: any) => {
    const dateClone = new Date(date);

    return dateClone && isValid(dateClone)
      ? `Week of ${format(startOfWeek(dateClone), "MMM do")}`
      : invalidLabel;
  };

  renderWrappedWeekDay = (
    date: any,
    selectedDate: any,
    dayInCurrentMonth: any
  ) => {
    const { classes } = this.props;
    const dateClone = new Date(date);
    const selectedDateClone = new Date(selectedDate);

    const start = startOfWeek(selectedDateClone);
    const end = endOfWeek(selectedDateClone);

    const dayIsBetween = isWithinInterval(dateClone, { start, end });
    const isFirstDay = isSameDay(dateClone, start);
    const isLastDay = isSameDay(dateClone, end);

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {format(dateClone, "d")} </span>
        </IconButton>
      </div>
    );
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          label="Week picker"
          value={selectedDate}
          onChange={this.handleWeekChange}
          renderDay={this.renderWrappedWeekDay}
          labelFunc={this.formatWeekSelectLabel}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default WeekPicker;
