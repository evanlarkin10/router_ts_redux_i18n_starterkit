import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const authStyles = (theme: Theme) =>
  createStyles({
    container: {
      justifyContent: "center",
      width: '50%'
    },
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(require("./authPhoto.png"))`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    body: {
      backgroundColor: theme.palette.common.white,
    },
    paper: {
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(4),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    field: {
      marginTop: theme.spacing(3)
    },
    actions: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "row",
      alignContent: "center"
    }),
    button: {
      marginRight: theme.spacing(1)
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
  });
export default authStyles;