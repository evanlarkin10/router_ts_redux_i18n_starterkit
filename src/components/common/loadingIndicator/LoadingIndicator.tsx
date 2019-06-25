import * as React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { LoadingIndicatorProps } from "@common/loadingIndicator/types";

const SIZE_DEFAULT = 40;

// tslint:disable-next-line:variable-name
const LoadingIndicatorWrapper: React.SFC<LoadingIndicatorProps> = props => {
  const { contained, classes, children } = props;

  if (contained) {
    return <div className={classes.container}>{children}</div>;
  }

  return <>{children}</>;
};

class LoadingIndicator extends React.Component<LoadingIndicatorProps> {
  render() {
    const { size, classes } = this.props;

    return (
      <LoadingIndicatorWrapper {...this.props}>
        <Grid container className={classes.root}>
          <CircularProgress
            className={classes.progress}
            size={size ? size : SIZE_DEFAULT}
          />
        </Grid>
      </LoadingIndicatorWrapper>
    );
  }
}
export default LoadingIndicator;
