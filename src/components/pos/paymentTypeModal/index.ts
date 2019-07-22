import { connects } from "utilities/commonHocs";
import { ApplicationState } from "reducer";
import addButtonModalStyles from "./paymentTypeModalStyles";
import { selectPaymentTypeModal } from "../selectors";
import { openPaymentTypeModal, closePaymentTypeModal } from "../actions";
import PaymentTypeModal, {
  PaymentTypeDispatchProps,
  PaymentTypeStateProps,
  PaymentTypeModalOwnProps
} from "./PaymentTypeModal";

const mapStateToProps = (state: ApplicationState): PaymentTypeStateProps => ({
  paymentModalOpen: selectPaymentTypeModal(state)
});

const mapDispatchToProps: PaymentTypeDispatchProps = {
  openPaymentTypeModal,
  closePaymentTypeModal
};

const hocs = {
  redux: {
    mapDispatchToProps,
    mapStateToProps
  },
  styles: addButtonModalStyles
};

export default connects<
  PaymentTypeModalOwnProps,
  PaymentTypeStateProps,
  PaymentTypeDispatchProps
>(PaymentTypeModal, hocs);
