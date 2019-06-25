import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const signInStyles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center"
    },
    paper: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    }),
    field: {
      marginTop: theme.spacing.unit * 3
    },
    actions: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      display: "flex",
      flexDirection: "row",
      alignContent: "center"
    }),
    button: {
      marginRight: theme.spacing.unit
    }
  });
export default signInStyles;
