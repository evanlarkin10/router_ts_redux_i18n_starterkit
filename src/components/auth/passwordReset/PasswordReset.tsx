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
import { PasswordResetProps } from "./types";
import { I18n } from 'aws-amplify'

interface PasswordResetState {
  code: string;
  newPassword: string;
}
class PasswordResetPage extends React.Component<PasswordResetProps, PasswordResetState> {
  constructor(props: PasswordResetProps) {
    super(props);
    this.state = {
      code: "",
      newPassword: ""
    };
  }

  private handlePasswordReset = (e: any) => {
    e.preventDefault()
    console.log("Change Password", this.state);
    this.props.switchComponent("SignIn");
  };
  private toSignIn = () => {
    this.props.switchComponent("SignIn");
  };

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
            {I18n.get('Reset Password')}
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="new-password"
              label={I18n.get('new_password')}
              type="new-password"
              id="new-password"
              autoComplete="current-password"
              onChange={(e: any) => { this.setState({ newPassword: e.target.value }) }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e: any) => this.handlePasswordReset(e)}
            >
              {I18n.get('reset_password')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component='button' variant="body2" onClick={() => this.toSignIn()}>
                  {I18n.get('back_to_sign_in')}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      </Grid>
    );
  }
}
export default PasswordResetPage;
