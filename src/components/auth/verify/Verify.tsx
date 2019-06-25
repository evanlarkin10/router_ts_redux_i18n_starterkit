import * as React from "react";
// import { Auth } from "aws-amplify";
import { VerifyProps } from "./types";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Icon,
  Paper
} from "@material-ui/core";
interface VerifyState {
  code: string;
}

export default class Verify extends React.Component<VerifyProps, VerifyState> {
  constructor(props: VerifyProps) {
    super(props);
    this.state = {
      code: ""
    };
  }
  handleVerify = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { code } = this.state;
    console.log(code);
  };

  resendCode = () => {
    console.log("resendcode");
  };
  render() {
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
            <InputLabel htmlFor="username">Verification Code</InputLabel>
            <Input
              value={this.state.code}
              onChange={event => this.setState({ code: event.target.value })}
              id="username"
              startAdornment={
                <InputAdornment position="start">
                  <Icon>email</Icon>
                </InputAdornment>
              }
            />
          </FormControl>
          <div className={classes.actions}>
            <Button
              variant="raised"
              className={classes.button}
              onClick={this.resendCode}
            >
              Resend Code
            </Button>
            <Button
              onClick={this.handleVerify}
              variant="raised"
              color="primary"
              className={classes.button}
            >
              Sign Up
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}
