import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { ForgotPasswordProps } from "./types";
import { I18n } from 'aws-amplify'

interface ForgotPasswordState {
  email: string;
}
class ForgotPasswordPage extends React.Component<ForgotPasswordProps, ForgotPasswordState> {
  constructor(props: ForgotPasswordProps) {
    super(props);
    this.state = {
      email: "",
    };
  }

  private toSignIn = () => {
    this.props.switchComponent("SignIn");
  };

  private handleSendResetCode = () => {
    console.log('Send Reset Code')
    this.props.switchComponent("PasswordReset");
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
            {I18n.get('forgot_password')}
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={I18n.get('email')}
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e: any) => { this.setState({ email: e.target.value }) }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => this.handleSendResetCode()}
            >
              {I18n.get('send_reset_code')}
            </Button>
            <Grid item>
              <Link component="button" variant="body2" onClick={() => this.toSignIn()}>
                {I18n.get("cancel")}
              </Link>
            </Grid>
          </form>
        </div>
      </Grid >
      </Grid >
    );
  }
}
export default ForgotPasswordPage;
