import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { SignInProps } from "./types";
import { I18n } from 'aws-amplify'

interface SignInState {
  email: string;
  password: string;
}
class SignInPage extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  private handleSignIn = (e: any) => {
    e.preventDefault()
    console.log("Sign In", this.state);
  };
  private toSignUp = () => {
    this.props.switchComponent("SignUp");
  };
  private toForgot = () => {
    this.props.switchComponent("ForgotPassword");
  };

  public render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {I18n.get('sign_in')}
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={I18n.get('password')}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e: any) => { this.setState({ password: e.target.value }) }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e: any) => this.handleSignIn(e)}
            >
              {I18n.get('sign_in')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component='button' variant="body2" onClick={() => this.toForgot()}>
                  {I18n.get('forgot_password')}
                </Link>
              </Grid>
              <Grid item>
                <Link component="button" variant="body2" onClick={() => this.toSignUp()}>
                  {I18n.get("no_account")}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default SignInPage;
