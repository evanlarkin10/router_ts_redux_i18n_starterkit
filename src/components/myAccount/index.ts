import { connects } from "utilities/commonHocs";
// import { ApplicationState } from 'reducer';
import { MyAccountStateProps, MyAccountDispatchProps } from "./types";
import myAccountStyles from "./myAccountStyles";
import MyAccount from "./MyAccount";
import { setFalse, setTrue } from "./actions";
const mapStateToProps = (/* state: ApplicationState */): MyAccountStateProps => ({
  myBool: false
  // var : selectSomething(state)
});

const mapDispatchToProps: MyAccountDispatchProps = {
  setFalse,
  setTrue
};

const hocs = {
  redux: {
    mapStateToProps,
    mapDispatchToProps
  },
  i18n: ["common"],
  styles: myAccountStyles
};

export default connects<{}>(MyAccount, hocs);
