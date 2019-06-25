import * as React from "react";

interface ExampleState {
  stateItem: string;
}

class Example extends React.Component<ExampleState> {
  render() {
    return <div>Dashboard</div>;
  }
}

export default Example;
