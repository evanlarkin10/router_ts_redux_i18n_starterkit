import * as React from "react";
import { I18n } from "aws-amplify";
import {
  Card,
  CardContent,
  AppBar,
  Dialog,
  Button,
  TextField,
  IconButton,
  Typography,
  Toolbar,
  InputAdornment
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { openAddButtonModal, closeAddButtonModal } from "../actions";
import * as RGL from "react-grid-layout";
import WidthProvider = RGL.WidthProvider;
const ReactGridLayout = WidthProvider(RGL);
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { AddButtonModalProps } from "./index";
import { BUTTON_HEIGHT } from "../constants";

export type FormFields = {
  label: string;
  amount: number;
};
export interface AddButtonModalState {
  formValues: FormFields;
}
export interface AddButtonStateProps {
  addModalOpen: boolean;
}
export interface AddButtonDispatchProps {
  openAddModal: typeof openAddButtonModal;
  closeAddModal: typeof closeAddButtonModal;
}
export interface AddButtonModalOwnProps {
  addToPOS: (label: string, amount:number) => void;
  className?: string;
  cols?: number;
  rowHeight?: number;
}

class AddButtonModal extends React.Component<
  AddButtonModalProps,
  AddButtonModalState
> {
  static defaultProps = {
    className: "layout",
    cols: 10,
    rowHeight: BUTTON_HEIGHT
  };
  constructor(props: any) {
    super(props);
    this.state = {
      formValues: {
        label: "Label",
        amount: 0.0
      }
    };
  }
  handleClose() {
    this.props.closeAddModal();
  }
  handleSave() {
    console.log("save");
    this.props.addToPOS(
      this.state.formValues.label,
      this.state.formValues.amount
    );
    this.props.closeAddModal();
  }
  renderLabelField = () => {
    return (
      <TextField
        required
        variant="outlined"
        id="sdfgsdfgsdfg"
        label="Button Label"
        name="label"
        type="text"
        value={this.state.formValues.label}
        onChange={this.handleOnChange}
        margin="normal"
      />
    );
  };
  renderAmountField = () => {
    return (
      <TextField
        variant="outlined"
        label="Amount"
        id="amount"
        name="amount"
        type="number"
        value={this.state.formValues.amount}
        onChange={this.handleOnChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    );
  };
  handleOnChange = (event: any) => {
    console.log(event);
    const formValues = this.state.formValues as any;
    const key = event.target.name;
    const value = event.target.value;
    formValues[key] = value;
    this.setState({ formValues });
  };
  render() {
    console.log("render");
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.addModalOpen ? true : false}
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
          <div className={classes.container}>
            <div style={{ flex: 4 }}>
              <Typography variant={"h6"}>Button Details</Typography>
              <form noValidate autoComplete="off">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {this.renderLabelField()}
                  {this.renderAmountField()}
                </div>
              </form>
            </div>
            <div style={{ flex: 2 }}>
              <Typography variant={"h6"}>Preview</Typography>
              <ReactGridLayout
                {...this.props}
                className={"layout"}
                layout={[
                  {
                    w: 1,
                    h: 1,
                    x: 0,
                    y: 0,
                    i: this.state.formValues.label,
                    moved: false,
                    static: false
                  }
                ]}
                maxRows={4}
                cols={4}
                isDraggable={true}
                isRearrangeable={true}
                isResizable={true}
                rowHeight={BUTTON_HEIGHT}
                autoSize={true}
              >
                <div
                  key={this.state.formValues.label}
                  className={classes.gridItem}
                >
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography
                        className={classes.buttonTitle}
                        align="center"
                        display="block"
                      >
                        {this.state.formValues.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </ReactGridLayout>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default AddButtonModal;
