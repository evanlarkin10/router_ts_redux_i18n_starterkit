import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const exampleStyles = (theme: Theme) =>
  createStyles({
    homeContent: {
      overflow: "auto",
      paddingTop: theme.spacing(2)
    }
  });
export default exampleStyles;
