import * as React from "react";
import { connect } from "react-redux";
import { WithNamespacesOptions } from "react-i18next";
import { reduxForm, ConfigProps } from "redux-form";
import withStyles, {
  StyleRules,
  StyleRulesCallback,
  WithStylesOptions
} from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import { ApplicationState } from "../../reducer";
// import loadingTranslations from "./loadingTranslations";

type Comp<P> = React.ComponentClass<P> | React.SFC<P>;
type HOC<O, P> = (C: Comp<O>) => Comp<P & React.HTMLProps<HTMLElement>>;

const compose = <P>(
  C: Comp<P & React.HTMLProps<HTMLElement>>,
  ...hocs: HOC<any, any>[]
): Comp<P & React.HTMLProps<HTMLElement>> => hocs.reduce((g, f) => f(g), C);

const id: HOC<any, any> = C => C;

export interface StyleConnectorWithOptions {
  styles: StyleRulesCallback | StyleRules;
  options: WithStylesOptions;
}
export type StyleConnector =
  | (StyleRulesCallback | StyleRules)
  | StyleConnectorWithOptions;
function isStyleConnectorWithOptions(
  connector: StyleConnector
): connector is StyleConnectorWithOptions {
  return (<StyleConnectorWithOptions>connector).styles !== undefined;
}

export interface HOCs<TStateProps, TDispatchProps, TOwnProps> {
  redux?: {
    mapStateToProps?: (
      state: ApplicationState,
      ownProps: TOwnProps
    ) => TStateProps;
    mapDispatchToProps?: TDispatchProps;
  };
  form?: ConfigProps;
  i18n?: string | string[];
  i18nOptions?: WithNamespacesOptions;
  styles?: StyleConnector;
}

export const connects = <TOwnProps = {}, TStateProps = {}, TDispatchProps = {}>(
  component: Comp<TOwnProps>,
  hocs?: HOCs<TStateProps, TDispatchProps, TOwnProps>
) => {
  /* const connectTranslate =
    hocs && hocs.i18n
      ? loadingTranslations(
          hocs.i18n,
          hocs.i18nOptions ? hocs.i18nOptions : undefined
        )
      : id; */
  const connectRedux =
    hocs && hocs.redux
      ? connect<TStateProps, TDispatchProps, TOwnProps, ApplicationState>(
          hocs.redux.mapStateToProps,
          hocs.redux.mapDispatchToProps
        )
      : connect();
  const connectForm = hocs && hocs.form ? reduxForm(hocs.form) : id;

  let connectStyles;
  if (hocs && hocs.styles) {
    if (isStyleConnectorWithOptions(hocs.styles)) {
      // If an error occurs here you may have named one of your classes "styles". Don't name it that.
      connectStyles = withStyles(hocs.styles.styles, hocs.styles.options);
    } else {
      connectStyles = withStyles(hocs.styles);
    }
  } else {
    connectStyles = id;
  }

  const finalHoc = compose<TOwnProps>(
    component,
    connectForm,
    connectRedux,
    // connectTranslate,
    connectStyles,
    withRouter
  );

  return finalHoc;
};
