import { createStyles, Theme } from '@material-ui/core';

const loadingIndicatorStyles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.palette.background.paper,
      zIndex: 100,
    },
    progress: {
      margin: 'auto',
    },
    container: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      flexGrow: 1,
    },
  });

export default loadingIndicatorStyles;
