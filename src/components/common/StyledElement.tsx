import * as React from "react";
import { WithStyles, Theme } from "@material-ui/core";
import {
  StyleRules,
  StyleRulesCallback
} from "@material-ui/core/styles/withStyles";
import { RouteComponentProps } from "react-router-dom";
import { WithNamespaces } from "react-i18next";
export default interface StyledElement<
  T extends string | StyleRules | StyleRulesCallback<Theme, {}> = string,
  Params = {}
  >
  extends WithStyles<T, true>,
  React.HTMLProps<HTMLElement>,
  RouteComponentProps<Params>,
  WithNamespaces { }
