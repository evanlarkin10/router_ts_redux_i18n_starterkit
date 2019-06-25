import * as React from "react";
import { Auth } from "aws-amplify";
import { SignUpProps } from "./types";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Icon,
  Paper
} from "@material-ui/core";
interface SignUpState {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSignUp = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { username, name, email, password } = this.state;
    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        name
      },
      validationData: [] // optional
    })
      .then(data => console.log(data))
      .then(() => this.props.switchComponent("Verify")) // switches Sign Up to Verification
      .catch(err => console.log(err));
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
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              value={this.state.username}
              onChange={event => this.setState({ name: event.target.value })}
              id="username"
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
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
              id="name"
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
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              value={this.state.email}
              onChange={event =>
                this.setState({ username: event.target.value })
              }
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
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              type="password"
              id="password"
              startAdornment={
                <InputAdornment position="start">
                  <Icon>lock</Icon>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            required={true}
            fullWidth={true}
            className={classes.field}
          >
            <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
            <Input
              value={this.state.confirmPassword}
              onChange={event =>
                this.setState({ confirmPassword: event.target.value })
              }
              type="confirm-password"
              id="confirm-password"
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
              onClick={this.handleSignUp}
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
