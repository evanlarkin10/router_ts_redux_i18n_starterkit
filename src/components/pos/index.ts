import { connects } from "utilities/commonHocs";
import POS from "./POS";
import POSStyles from "./posStyles";
import { POSDispatchProps, POSStateProps } from "./types";
import { ApplicationState } from "reducer";
import {
  selectIsLoadingPOS,
  selectLayouts,
  selectAddModalOpen,
  selectPaymentTypeModal
} from "./selectors";
import {
  setEditingPOS,
  setLoadingPOS,
  openAddButtonModal,
  closeAddButtonModal,
  openPaymentTypeModal,
  closePaymentTypeModal,
  savePOSPreferences,
  processTransaction
} from "./actions";
import { selectUser } from "redux/UserAPI/selectors";
// import { savePOSPreferences } from 'redux/UserAPI/actions'

const mapStateToProps = (state: ApplicationState): POSStateProps => ({
  isLoadingPOS: selectIsLoadingPOS(state),
  layouts: selectLayouts(state),
  addModalOpen: selectAddModalOpen(state),
  paymentTypeModalOpen: selectPaymentTypeModal(state),
  user: selectUser(state)
});

const mapDispatchToProps: POSDispatchProps = {
  openPaymentTypeModal,
  savePOSPreferences,
  closePaymentTypeModal,
  processTransaction,
  setEditing: setEditingPOS,
  setLoading: setLoadingPOS,
  openAddModal: openAddButtonModal,
  closeAddModal: closeAddButtonModal
};

const hocs = {
  redux: {
    mapDispatchToProps,
    mapStateToProps
  },
  i18n: ["common"],
  styles: POSStyles
};

export default connects<{}, POSStateProps, POSDispatchProps>(POS, hocs);
