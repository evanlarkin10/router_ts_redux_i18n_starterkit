import * as React from "react";
import { ConfirmSignUp } from "aws-amplify-react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { I18n } from "aws-amplify";
import { withStyles } from "@material-ui/styles";
import { styles } from "../common/authStyles";

class CustomConfirmSignUp extends ConfirmSignUp {
  constructor(props: any) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
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
              {I18n.get("verify_account")}
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                key="username"
                label={I18n.get("username")}
                name="username"
                autoComplete="username"
                autoFocus
                onChange={this.handleInputChange}
                onKeyPress={(ev: any) => {
                  if (ev.key === "Enter") {
                    super.confirm();
                  }
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="code"
                label={I18n.get("code")}
                name="code"
                key="code"
                autoComplete="code"
                autoFocus
                onChange={this.handleInputChange}
                onKeyPress={(ev: any) => {
                  if (ev.key === "Enter") {
                    super.confirm();
                  }
                }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => super.confirm()}
              >
                {I18n.get("verify_account")}
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CustomConfirmSignUp);
