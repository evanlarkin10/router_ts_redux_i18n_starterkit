import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
const addButtonModalStyles = (theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  });
export default addButtonModalStyles;
