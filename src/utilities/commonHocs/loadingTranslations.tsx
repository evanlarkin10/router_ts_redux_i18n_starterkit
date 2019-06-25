import * as React from "react";
import LoadingIndicator from "@common/loadingIndicator";
import {
  WithNamespaces,
  withNamespaces,
  NamespaceExtractor,
  WithNamespacesOptions
} from "react-i18next";

export default (
  namespace?: string | string[] | NamespaceExtractor,
  options?: WithNamespacesOptions
  // tslint:disable-next-line:variable-name
) => <P extends WithNamespaces>(WrappedComponent: React.ComponentType<P>) => {
  class LoadingTranslations extends React.Component<P> {
    render() {
      const { tReady } = this.props;
      if (!tReady) {
        return <LoadingIndicator />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  return withNamespaces(namespace, options)(LoadingTranslations);
};
