import { createStyles, Theme } from "@material-ui/core/styles";
const ordersStyles = (theme: Theme) =>
  //  (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    },
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
      height: 240
    },
    seeMore: {
      marginTop: theme.spacing(3)
    }
  });
export default ordersStyles;
