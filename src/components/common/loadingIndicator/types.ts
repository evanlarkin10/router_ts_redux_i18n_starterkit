import loadingIndicatorStyles from "@common/loadingIndicator/loadingIndicatorStyles";
import { WithStyles } from "@material-ui/core";

export interface LoadingIndicatorOwnProps {
  size?: number;
  contained?: boolean;
}

export type LoadingIndicatorProps = LoadingIndicatorOwnProps &
  WithStyles<typeof loadingIndicatorStyles> & {};
