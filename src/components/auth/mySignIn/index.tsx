import * as React from "react";
import { SignIn } from "aws-amplify-react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { I18n } from "aws-amplify";
import { withStyles } from "@material-ui/styles";
import { styles } from "../common/authStyles";

class CustomSignIn extends SignIn {
  constructor(props: any) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent() {
    const { classes } = this.props;
    const authPhoto = require("components/auth/common/authPhoto.png");
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
            <form className={classes.form} noValidate onSubmit={this.signIn}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                key="username"
                onChange={this.handleInputChange}
                label={I18n.get("email")}
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={this.handleInputChange}
                label={I18n.get("password")}
                type="password"
                id="password"
                autoComplete="current-password"
                onKeyPress={(ev: any) => {
                  if (ev.key === "Enter") {
                    super.signIn();
                  }
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => super.signIn()}
              >
                {I18n.get("sign_in")}
              </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => super.changeState("forgotPassword")}
                >
                  {I18n.get("forgot_password?")}
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => super.changeState("signUp")}
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

export default withStyles(styles)(CustomSignIn);
