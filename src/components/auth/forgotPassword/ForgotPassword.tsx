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
    this.props.switchComponent("Verify");
  }
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
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e: any) => this.handleSendResetCode(e)}
            >
              {I18n.get('sign_in')}
            </Button>
            <Grid item>
              <Link component="button" variant="body2" onClick={() => this.toSignIn()}>
                {I18n.get("cancel")}
              </Link>
            </Grid>
            </Grid>
          </form>
        </div>
      </Container >
    );
  }
}
export default ForgotPasswordPage;
