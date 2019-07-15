import * as React from 'react';
import { ForgotPassword } from "aws-amplify-react";
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
import { withStyles } from '@material-ui/styles';
import { styles } from '../common/authStyles'

class CustomForgotPassword extends ForgotPassword {
    constructor(props: any) {
        super(props);
        this._validAuthStates = ["forgotPassword", "signedOut", "signedUp"];
        this.state = {
            sentCode: false
        }
    }

    showComponent() {
        const { classes } = this.props
        const authPhoto = require('components/auth/common/authPhoto.png')
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
                            {I18n.get("forgot_password")}
                        </Typography>
                        {!this.state.sentCode &&
                            <>
                                <form className={classes.form} noValidate onSubmit={this.send}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        key='username'
                                        onChange={this.handleInputChange}
                                        label={I18n.get("email")}
                                        name="username"
                                        autoComplete="username"
                                        autoFocus
                                    />
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={() => { super.send(); this.setState({ sentCode: true }) }}
                                    >
                                        {I18n.get("send_code")}
                                    </Button>
                                </form>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            component="button"
                                            variant="body2"
                                            onClick={() => super.changeState("signIn")}
                                        >
                                            {I18n.get("back_to_sign_in")}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </>
                        }
                        {this.state.sentCode &&
                            <>
                                <form className={classes.form} noValidate onSubmit={this.send}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="code"
                                        key='code'
                                        onChange={this.handleInputChange}
                                        label={I18n.get("code")}
                                        name="code"
                                        autoComplete="code"
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="password"
                                        key='password'
                                        type='password'
                                        onChange={this.handleInputChange}
                                        label={I18n.get("password")}
                                        name="password"
                                        autoComplete="password"
                                    />
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={() => { super.submit() }}
                                    >
                                        {I18n.get("change_password")}
                                    </Button>
                                </form>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            component="button"
                                            variant="body2"
                                            onClick={() => super.send()}
                                        >
                                            {I18n.get("resend_code")}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </>
                        }
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(CustomForgotPassword);