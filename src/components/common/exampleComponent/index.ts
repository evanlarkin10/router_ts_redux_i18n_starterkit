import { connects } from "utilities/commonHocs";
// import { ApplicationState } from 'reducer';
import { ExampleStateProps, ExampleDispatchProps } from "./types";
import exampleStyles from "./exampleStyles";
import Example from "./Example";
import { setFalse, setTrue } from "./actions";
const mapStateToProps = (/* state: ApplicationState */): ExampleStateProps => ({
  myBool: false
  // var : selectSomething(state)
});

const mapDispatchToProps: ExampleDispatchProps = {
  setFalse,
  setTrue
};

const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  i18n: ["common"],
  styles: exampleStyles
};

export default connects<{}>(Example, hocs);
