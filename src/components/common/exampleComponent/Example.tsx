import { ExampleProps } from "./types";
import * as React from "react";

interface ExampleState {
  stateItem: string;
}

class Example extends React.Component<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);

    this.state = {
      stateItem: "my state item"
    };
  }
  render() {
    return <div>test</div>;
  }
}

export default Example;
