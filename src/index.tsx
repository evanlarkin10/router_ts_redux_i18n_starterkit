import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { pink, blue } from "@material-ui/core/colors";

/* Make the store available to all container
components in the application without passing it explicitly */
import { Provider } from "react-redux";

// Store type from Redux
import { Store } from "redux";

// Import the store function and state
import configureStore from "./store";
import { ApplicationState } from "./reducer";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";
import App from "./App";
interface IProps {
  store: Store<ApplicationState>;
}

/*
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

// tslint:disable-next-line:variable-name
const Root: React.SFC<IProps> = props => {
  console.log("Enter Index");

  return (
    <Provider store={props.store}>
      <Router>
        <MuiThemeProvider theme={theme}>
          <I18nextProvider i18n={i18next}>
            <App />
          </I18nextProvider>
        </MuiThemeProvider>
      </Router>
    </Provider>
  );
};

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);
