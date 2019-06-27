import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const signInStyles = (theme: Theme) =>
  createStyles({
    container: {
      justifyContent: "center",
      width: '50%'
    },
    body: {
      backgroundColor: theme.palette.common.white,
    },
    paper: {
      marginTop: theme.spacing.unit * 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing.unit / 4,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit / 4,
    },
    submit: {
      margin: theme.spacing.unit,
    },
  });
export default signInStyles;
