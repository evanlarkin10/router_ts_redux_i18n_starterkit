import * as React from "react";
import { I18n } from "aws-amplify";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
// import Slide from '@material-ui/core/Slide';
// import { TransitionProps } from '@material-ui/core/transitions';
import addButtonModalStyles from "./addButtonModalStyles";
import StyledElememt from "components/common/StyledElement";
import { openAddButtonModal, closeAddButtonModal } from "../actions";
/* const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
 */
export interface AddButtonStateProps {
  addModalOpen: boolean;
}
export interface AddButtonDispatchProps {
  openAddModal: typeof openAddButtonModal;
  closeAddModal: typeof closeAddButtonModal;
}

export type AddButtonModalProps = StyledElememt<typeof addButtonModalStyles> &
  AddButtonStateProps &
  AddButtonDispatchProps;

class AddButtonModal extends React.Component<AddButtonModalProps, {}> {
  handleClose() {
    this.props.closeAddModal();
  }
  handleSave() {
    console.log("save");
    this.props.closeAddModal();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.addModalOpen}
          onClose={() => this.handleClose()}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => this.handleClose()}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {I18n.get("add_button_to_pos")}
              </Typography>
              <Button color="inherit" onClick={() => this.handleSave()}>
                {I18n.get("save")}
              </Button>
            </Toolbar>
          </AppBar>
          <div>Stepper</div>
        </Dialog>
      </div>
    );
  }
}
export default AddButtonModal;
