declare module 'aws-amplify-react' {
    export declare class SignIn extends React.Component<StyledElement<typeof authStyles>> {
        _validAuthStates: string[];
        handleInputChange: React.EventHandler;
        signIn(): void;
        changeState(state: string): void;
        classes: any
    }
    export declare class SignUp extends React.Component<StyledElement<typeof authStyles>> {
        _validAuthStates: string[];
        handleInputChange: React.EventHandler;
        signUp(): void;
        changeState(state: string): void;
        classes: any;
        state: any;
    }
    export declare class ConfirmSignUp extends React.Component<StyledElement<typeof authStyles>> {
        _validAuthStates: string[];
        handleInputChange: React.EventHandler;
        signUp(): void;
        changeState(state: string): void;
        classes: any;
        confirm(): void;
    }
    export declare class ForgotPassword extends React.Component<StyledElement<typeof authStyles>> {
        _validAuthStates: string[];
        handleInputChange: React.EventHandler;
        changeState(state: string): void;
        classes: any;
        state: any;
        send(): void;
        submit(): void;
    }
    export declare class Greetings extends React.Component {
    }

    interface IAuthenticatorProps {
        hide: any[]
        amplifyConfig: any;
        onStateChange: (authState: String) => any
    }

    export declare class Authenticator extends React.Component<IAuthenticatorProps> {

    }
}