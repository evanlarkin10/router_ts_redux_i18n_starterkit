import * as React from "react";
import { I18n } from "aws-amplify";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
// import Slide from '@material-ui/core/Slide';
// import { TransitionProps } from '@material-ui/core/transitions';
import addButtonModalStyles from "./addButtonModalStyles";
import StyledElememt from "components/common/StyledElement";
import { openAddButtonModal, closeAddButtonModal } from "../actions";

export interface AddButtonModalState {
  buttonLabel: string;
}
export interface AddButtonStateProps {
  addModalOpen: boolean;
}
export interface AddButtonDispatchProps {
  openAddModal: typeof openAddButtonModal;
  closeAddModal: typeof closeAddButtonModal;
}
export interface AddButtonModalOwnProps{
  addToPOS: (label:string)=>(void)
}

export type AddButtonModalProps = StyledElememt<typeof addButtonModalStyles> &
  AddButtonStateProps &AddButtonModalOwnProps& 
  AddButtonDispatchProps;

class AddButtonModal extends React.Component<AddButtonModalProps, AddButtonModalState> {
  constructor(props: any){
    super(props)
    this.state={
      buttonLabel:''
    }
  }
  handleClose() {
    this.props.closeAddModal();
  }
  handleSave() {
    console.log("save");
    this.props.addToPOS(this.state.buttonLabel)
    this.props.closeAddModal();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.addModalOpen?true:false}
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
                {I18n.get("create_button")}
              </Button>
            </Toolbar>
          </AppBar>
          <TextField
            required
            id="standard-required"
            label="Button Label"
            defaultValue="Button Label"
            className={classes.textField}
            onChange={(e: any)=>this.setState({buttonLabel: e.target.value })}
            margin="normal"
          />
        </Dialog>
      </div>
    );
  }
}
export default AddButtonModal;
