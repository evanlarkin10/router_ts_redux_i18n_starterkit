import * as React from "react";
import { I18n } from "aws-amplify";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
// import Slide from '@material-ui/core/Slide';
// import { TransitionProps } from '@material-ui/core/transitions';
import addButtonModalStyles from "./paymentTypeModalStyles";
import StyledElememt from "components/common/StyledElement";
import { openPaymentTypeModal, closePaymentTypeModal } from "../actions";

export interface PaymentTypeModalState {
  buttonLabel: string;
}
export interface PaymentTypeStateProps {
  paymentModalOpen: boolean;
}
export interface PaymentTypeDispatchProps {
  openPaymentTypeModal: typeof openPaymentTypeModal;
  closePaymentTypeModal: typeof closePaymentTypeModal;
}
export interface PaymentTypeModalOwnProps {
  processTransaction: (paymentMethod: string) => void;
}

export type PaymentTypeModalProps = StyledElememt<typeof addButtonModalStyles> &
  PaymentTypeStateProps &
  PaymentTypeModalOwnProps &
  PaymentTypeDispatchProps;

class PaymentTypeModal extends React.Component<
  PaymentTypeModalProps,
  PaymentTypeModalState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      buttonLabel: ""
    };
  }
  handleClose() {
    this.props.closePaymentTypeModal();
  }
  handleSubmit() {
    this.props.closePaymentTypeModal();
    this.props.processTransaction("Visa");
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.props.paymentModalOpen ? true : false}
          onClose={() => this.handleClose()}
        >
          <DialogTitle>
            <Typography className={classes.modalTitle}>
              {I18n.get("select_payment_method")}
            </Typography>
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={() => this.handleClose()}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleSubmit()} color="primary">
              Process Transaction
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PaymentTypeModal;
