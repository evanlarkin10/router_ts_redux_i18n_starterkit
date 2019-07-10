import * as React from "react";
import { logout } from 'utilities/auth'
class Employees extends React.Component {
  render() {
    return <div>Employees<button onClick={() => logout()}>logout
      </button></div>;
  }
}

export default Employees;
