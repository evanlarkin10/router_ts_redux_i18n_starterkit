import * as React from "react";
import "./App.css";
import Routes from "./routes";
class App extends React.Component {
  // get current authenticated user

  render() {
    console.log("Render App");
    return <Routes />;
  }
}

export default App;
