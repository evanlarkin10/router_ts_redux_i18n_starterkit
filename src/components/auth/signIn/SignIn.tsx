import * as React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Icon
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { SignInProps } from "./types";

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

  private handleEmailAddressChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  private handlePasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  private handleSignIn = () => {
    console.log("Sign In");
  };

  public render(): JSX.Element {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <h2>{"Login"}</h2>
          <FormControl
            required={true}
            fullWidth={true}
            className={classes.field}
          >
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              value={this.state.email}
              onChange={this.handleEmailAddressChange}
              id="email"
              startAdornment={
                <InputAdornment position="start">
                  <Icon>email</Icon>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            required={true}
            fullWidth={true}
            className={classes.field}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              type="password"
              id="password"
              startAdornment={
                <InputAdornment position="start">
                  <Icon>lock</Icon>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className={classes.actions}>
            <Button variant="raised" className={classes.button}>
              Cancel
            </Button>
            <Button
              onClick={this.handleSignIn}
              variant="raised"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}
export default SignInPage;
