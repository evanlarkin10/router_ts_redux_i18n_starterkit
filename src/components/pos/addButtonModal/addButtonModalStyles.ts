import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { BUTTON_HEIGHT } from "../constants";
const addButtonModalStyles = (theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative"
    },
    container: {
      display: "flex",
      padding: 10
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
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
    buttonTitle: {
      fontSize: 20,
      height: "100%",
      marginTop: BUTTON_HEIGHT / 4
    },
    gridItem: {
      alignItems: "center",
      justifyContent: "center"
    }
  });
export default addButtonModalStyles;
