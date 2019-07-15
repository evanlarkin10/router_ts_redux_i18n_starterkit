import * as React from "react";
import config from "./aws-exports";
import CustomSignIn from "components/amplifyAuth/mySignIn";
import CustomSignUp from "components/amplifyAuth/mySignUp";
import CustomConfirmSignUp from "components/amplifyAuth/myConfirmSignUp";
import CustomForgotPassword from "components/amplifyAuth/myForgotPassword";
import App from "./App";
import { Authenticator, SignIn, SignUp, ConfirmSignUp, ForgotPassword, Greetings } from "aws-amplify-react";

class AppWithAuth extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Authenticator hide={[SignIn, SignUp, ConfirmSignUp, ForgotPassword, Greetings]} amplifyConfig={config} onStateChange={(authState) => console.log(authState)} >
                    <CustomSignIn />
                    <CustomSignUp />
                    <CustomConfirmSignUp />
                    <CustomForgotPassword />
                    <App />
                </Authenticator>
            </React.Fragment>
        )
    }
}

export default AppWithAuth;