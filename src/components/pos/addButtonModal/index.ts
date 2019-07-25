import { connects } from "utilities/commonHocs";
import { ApplicationState } from "reducer";
import addButtonModalStyles from "./addButtonModalStyles";
import { selectAddModalOpen } from "../selectors";
import { openAddButtonModal, closeAddButtonModal } from "../actions";
import AddButtonModal, {
  AddButtonDispatchProps,
  AddButtonStateProps,
  AddButtonModalOwnProps
} from "./AddButtonModal";
import { WidthProviderProps, ReactGridLayoutProps } from "react-grid-layout";
import StyledElememt from "components/common/StyledElement";

export type AddButtonModalProps = StyledElememt<typeof addButtonModalStyles> &
  AddButtonStateProps &
  AddButtonModalOwnProps &
  AddButtonDispatchProps &
  ReactGridLayoutProps &
  WidthProviderProps &
  any & {};

const mapStateToProps = (state: ApplicationState): AddButtonStateProps => ({
  addModalOpen: selectAddModalOpen(state)
});

const mapDispatchToProps: AddButtonDispatchProps = {
  openAddModal: openAddButtonModal,
  closeAddModal: closeAddButtonModal
};

const hocs = {
  redux: {
    mapDispatchToProps,
    mapStateToProps
  },
  styles: addButtonModalStyles
};

export default connects<
  AddButtonModalOwnProps,
  AddButtonStateProps,
  AddButtonDispatchProps
>(AddButtonModal, hocs);
