import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { pink, blue } from "@material-ui/core/colors";

/* Make the store available to all container
components in the application without passing it explicitly */
import { Provider } from "react-redux";

import store from "./store";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";
// import Routes from "./routes";
import App from "./App";
import { I18n } from "aws-amplify";
import translations from './translations/getTranslations'
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
I18n.putVocabularies(translations)
// tslint:disable-next-line:variable-name
const Root: React.SFC = () => {
  console.log("Enter Index", translations);
  return (
    <Provider store={store}>
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

// Render the App
ReactDOM.render(<Root />, document.getElementById("root") as HTMLElement);
