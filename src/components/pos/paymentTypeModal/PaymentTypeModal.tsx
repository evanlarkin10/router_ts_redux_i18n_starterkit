import * as React from "react";
import { I18n } from "aws-amplify";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  Paper
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
  selected: number;
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
      buttonLabel: "",
      selected: null
    };
  }
  handleClose() {
    this.props.closePaymentTypeModal();
  }
  handleSubmit() {
    this.props.closePaymentTypeModal();
    let selection = "";
    switch (this.state.selected) {
      case 0:
        selection = "Visa";
        break;
      case 1:
        selection = "Mastercard";
        break;
      case 2:
        selection = "Cash";
        break;
      default:
        selection = "Cash";
    }
    this.setState({ selected: null });
    this.props.processTransaction(selection);
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
            <Paper
              className={
                this.state.selected === 0
                  ? classes.paperSelected
                  : classes.paper
              }
              onClick={() => this.setState({ selected: 0 })}
            >
              <Typography variant="h5" component="h3">
                Visa
              </Typography>
            </Paper>
            <Paper
              className={
                this.state.selected === 1
                  ? classes.paperSelected
                  : classes.paper
              }
              onClick={() => this.setState({ selected: 1 })}
            >
              <Typography variant="h5" component="h3">
                Mastercard
              </Typography>
            </Paper>
            <Paper
              className={
                this.state.selected === 2
                  ? classes.paperSelected
                  : classes.paper
              }
              onClick={() => this.setState({ selected: 2 })}
            >
              <Typography variant="h5" component="h3">
                Cash
              </Typography>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              disabled={this.state.selected === null}
              onClick={() => this.handleSubmit()}
              color="primary"
            >
              Process Transaction
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PaymentTypeModal;
