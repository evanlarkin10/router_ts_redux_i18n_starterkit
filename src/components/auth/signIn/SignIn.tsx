import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { SignInProps } from "./types";
import { I18n } from "aws-amplify";
import { login } from "utilities/auth";
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

  private handleSignIn = async (e: any) => {
    e.preventDefault();
    console.log('Handle Sign In', this.state)
    const result = await login(this.state.email, this.state.password);
    if (result) {
      this.props.history.push("/dashboard");
      this.props.switchComponent("Authenticated");
    } else {
      console.log("Login Failed", result);
    }
  };
  private toSignUp = () => {
    this.props.switchComponent("SignUp");
  };
  private toForgot = () => {
    this.props.switchComponent("ForgotPassword");
  };

  public render(): JSX.Element {
    const { classes } = this.props;
    const authPhoto = require("../common/authPhoto.png");
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7}>
          <img src={authPhoto} height="100%" width="100%" />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {I18n.get("sign_in")}
            </Typography>
            <form className={classes.form} noValidate onSubmit={(e) => this.handleSignIn(e)}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={I18n.get("email")}
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e: any) => {
                  this.setState({ email: e.target.value });
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={I18n.get("password")}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e: any) => {
                  this.setState({ password: e.target.value });
                }}
                onKeyPress={(ev: any) => {
                  if (ev.key === 'Enter') {
                    this.handleSignIn(ev)
                  }
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e: any) => this.handleSignIn(e)}
              >
                {I18n.get("sign_in")}
              </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => this.toForgot()}
                >
                  {I18n.get("forgot_password?")}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => this.toSignUp()}
                >
                  {I18n.get("no_account")}
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default SignInPage;
