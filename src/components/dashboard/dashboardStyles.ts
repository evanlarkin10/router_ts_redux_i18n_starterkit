import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
const dashboardStyles = (theme: Theme) =>
  //  (theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column"
    },
    fixedHeight: {
      height: 360
    }
  });
export default dashboardStyles;
