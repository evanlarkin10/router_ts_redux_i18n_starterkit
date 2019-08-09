import { connects } from "utilities/commonHocs";
import WeekPicker, { WeekPickerOwnProps } from "./WeekPicker";
import weekPickerStyles from "./weekPickerStyles";
const hocs = {
  styles: weekPickerStyles
};
export default connects<WeekPickerOwnProps>(WeekPicker, hocs);
