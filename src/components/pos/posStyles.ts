import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { BUTTON_HEIGHT } from "./constants";
const POSStyles = (theme: Theme) =>
  createStyles({
    removeStyle: {
      right: "2px",
      top: 0,
      cursor: "pointer"
    },
    title: {
      fontSize: 25,
      height: "100%"
    },
    number: {
      fontSize: 30,
      fontWeight: "bold",
      height: "100%",
      marginTop: BUTTON_HEIGHT / 5
    },
    deleteButton: {
      fontSize: 18,
      float: "right"
    },
    gridItem: {
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    cardContent: {
      alignItems: "center",
      justifyContent: "center",
      padding: 2,
      height: "100%",
      width: "100%"
    },
    fab: {
      margin: theme.spacing(1),
      alignSelf: "right"
    },
    toolbar: {
      justifyContent: "flex-end",
      flexDirection: "column",
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed"
    }
  });
export default POSStyles;
