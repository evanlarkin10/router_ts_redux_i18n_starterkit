import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { VerifyProps } from "./types";
import { I18n } from 'aws-amplify'

interface VerifyState {
  code: string;
}
class VerifyPage extends React.Component<VerifyProps, VerifyState> {
  constructor(props: VerifyProps) {
    super(props);
    this.state = {
      code: "",
    };
  }

  private verifyAccount = () => {
    console.log('Verify Account')
    this.props.switchComponent("SignIn");
  }
  public render(): JSX.Element {
    const { classes } = this.props;
    const authPhoto = require('../common/authPhoto.png')
    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
      <img src={authPhoto} height='100%' width='100%'/>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {I18n.get('verify_account')}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="code"
              label={I18n.get('code')}
              name="code"
              autoComplete="code"
              autoFocus
              onChange={(e: any) => { this.setState({ code: e.target.value }) }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => this.verifyAccount()}
            >
              {I18n.get('verify_account')}
            </Button>
          </form>
        </div>
      </Grid >
      </Grid >
    );
  }
}
export default VerifyPage;
