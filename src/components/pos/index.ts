import { connects } from "utilities/commonHocs";
import POS from "./POS";
import POSStyles from "./posStyles";
import { POSDispatchProps, POSStateProps } from "./types";
import { ApplicationState } from "reducer";
import {
  selectIsLoadingPOS,
  selectLayout,
  selectAddModalOpen,
  selectPaymentTypeModal
} from "./selectors";
import {
  setEditingPOS,
  setLoadingPOS,
  savePOSPreferences,
  openAddButtonModal,
  closeAddButtonModal,
  openPaymentTypeModal,
  closePaymentTypeModal
} from "./actions";
// import { savePOSPreferences } from 'redux/UserAPI/actions'

const mapStateToProps = (state: ApplicationState): POSStateProps => ({
  isLoadingPOS: selectIsLoadingPOS(state),
  layout: selectLayout(state),
  addModalOpen: selectAddModalOpen(state),
  paymentTypeModalOpen: selectPaymentTypeModal(state)
});

const mapDispatchToProps: POSDispatchProps = {
  openPaymentTypeModal,
  closePaymentTypeModal,
  savePOSPreferences: savePOSPreferences.started,
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
