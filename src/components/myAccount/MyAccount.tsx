import { MyAccountProps } from "./types";
import * as React from "react";
import { Paper, Tabs, Tab, AppBar, Typography, Box } from "@material-ui/core";
import { I18n } from "aws-amplify";
interface MyAccountState {
  value: number;
}

class MyAccount extends React.Component<MyAccountProps, MyAccountState> {
  constructor(props: MyAccountProps) {
    super(props);

    this.state = {
      value: 1
    };
  }
  componentDidMount() {
    this.props.setTrue();
  }
  a11yProps(index: any) {
    return {
      id: `account-tab-${index}`,
      "aria-controls": `account-tabpanel-${index}`
    };
  }
  render() {
    const { value } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Paper square elevation={0}>
            {I18n.get("my_account")}
          </Paper>
        </div>
        <div style={{ flex: 5 }}>
          <Paper square elevation={0}>
            <AppBar position="static" color={"default"} elevation={0}>
              <Tabs
                value={this.state.value}
                onChange={(event: object, value: any) => {
                  event;
                  this.setState({ value });
                }}
                variant={"fullWidth"}
                aria-label="Account tabs"
              >
                <Tab label="Subscription" {...this.a11yProps(0)} />
                <Tab label="Organization" {...this.a11yProps(1)} />
                <Tab label="Locations" {...this.a11yProps(2)} />
              </Tabs>
            </AppBar>
            <Typography
              component="div"
              role="tabpanel"
              hidden={value !== 0}
              id={`simple-tabpanel-1`}
              aria-labelledby={`simple-tab-1`}
            >
              <Box p={3}>Item1</Box>
            </Typography>
            <Typography
              component="div"
              role="tabpanel"
              hidden={value !== 1}
              id={`simple-tabpanel-2`}
              aria-labelledby={`simple-tab-2`}
            >
              <Box p={3}>Item2</Box>
            </Typography>
            <Typography
              component="div"
              role="tabpanel"
              hidden={value !== 2}
              id={`simple-tabpanel-3`}
              aria-labelledby={`simple-tab-3`}
            >
              <Box p={3}>Item3</Box>
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }
}

export default MyAccount;
