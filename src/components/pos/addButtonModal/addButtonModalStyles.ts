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
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  });
export default addButtonModalStyles;
