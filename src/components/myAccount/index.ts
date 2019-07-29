import { connects } from "utilities/commonHocs";
import { ApplicationState } from "reducer";
import { MyAccountStateProps, MyAccountDispatchProps } from "./types";
import myAccountStyles from "./myAccountStyles";
import MyAccount from "./MyAccount";
import { setFalse, setTrue } from "./actions";
import { selectUser } from "redux/UserAPI/selectors";
const mapStateToProps = (state: ApplicationState): MyAccountStateProps => ({
  user: selectUser(state)
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
