import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const myAccountStyles = (theme: Theme) =>
  createStyles({
    homeContent: {
      overflow: "auto",
      paddingTop: theme.spacing(2)
    },
    detailPane: {
      width: "100%",
      height: "100%"
    },
    accountPane: {
      width: "100%",
      height: "100%",
      textAlign: "center"
    }
  });
export default myAccountStyles;
