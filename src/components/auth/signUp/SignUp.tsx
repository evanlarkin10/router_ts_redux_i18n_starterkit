import * as React from "react";
// import { Auth } from "aws-amplify";
import { SignUpProps } from "./types";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {I18n} from 'aws-amplify'
interface SignUpState {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confPassword: string;
}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confPassword: ""
    };
  }
  handleSignUp = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(this.state)
    // const { username, name, email, password } = this.state;
    /* Auth.signUp({
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
      .catch(err => console.log(err)); */
  };
  toSignIn=()=>{
    this.props.switchComponent('SignIn')
  }

  render() {
    const classes = this.props.classes;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {I18n.get('sign_up')}
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label={I18n.get("first_name")}
                  onChange={(e: any) => { this.setState({ fname: e.target.value }) }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label={I18n.get("last_name")}
                  name="lastName"
                  autoComplete="lname"
                  onChange={(e: any) => { this.setState({ lname: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label={I18n.get("email")}
                  name="email"
                  autoComplete="email"
                  onChange={(e: any) => { this.setState({ email: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label={I18n.get("password")}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e: any) => { this.setState({ password: e.target.value }) }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="conf-password"
                  label={I18n.get("confirm_password")}
                  type="password"
                  id="conf-password"
                  autoComplete="confirm-password"
                  onChange={(e: any) => { this.setState({ confPassword: e.target.value }) }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e:any)=>this.handleSignUp(e)}
            >
              {I18n.get("sign_up")}
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component="button" variant="body2" onClick={()=>this.toSignIn()}>
                {I18n.get("have_account")}
              </Link>
              </Grid>
            </Grid>
          </form>
              </div>
        </Container>
    );    
  }
}
                              
                                                                        