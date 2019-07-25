import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const addButtonModalStyles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    modalTitle: {
      fontSize: 14,
      fontWeight: "bold"
    },
    paper: {
      padding: theme.spacing(3, 2),
      marginBottom: 15,
      alignItems: "center",
      width: 400
    },
    paperSelected: {
      padding: theme.spacing(3, 2),
      marginBottom: 15,
      alignItems: "center",
      width: 400,
      backgroundColor: theme.palette.primary.main
    }
  });
export default addButtonModalStyles;
