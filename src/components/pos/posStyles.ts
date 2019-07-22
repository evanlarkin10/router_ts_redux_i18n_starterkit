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
      fontSize: 20,
      height: "100%",
      marginTop: BUTTON_HEIGHT / 4
    },
    number: {
      fontSize: 30,
      fontWeight: "bold",
      height: "100%",
      marginTop: BUTTON_HEIGHT / 4
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
    amountField: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: "90%"
    },
    fab: {
      margin: theme.spacing(1),
      alignSelf: "right"
    },
    toolbar: {
      justifyContent: "flex-end",
      flexDirection: "column",
      top: "auto",
      right: -5,
      bottom: 5,
      left: "auto",
      position: "fixed"
    },
    cashField: {
      color: "black",
      fontSize: 25,
      fontWeight: "bold"
    },
    receipt: {
      float: "left",
      height: "100%",
      width: "100%",
      padding: 5
    },
    receiptAmount: {
      fontSize: 14,
      fontWeight: "bold",
      float: "right",
      paddingBottom: 5
    },
    receiptTitle: {
      fontSize: 14
    }
  });
export default POSStyles;
