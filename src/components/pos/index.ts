import { connects } from "utilities/commonHocs";
import POS from "./POS";
import POSStyles from './posStyles'
import { POSDispatchProps, POSStateProps } from './types'
import { ApplicationState } from 'reducer'
import { selectIsLoadingPOS, selectLayout } from "./selectors";
import { loadPOS, savePOSPreferences, setEditingPOS, setLoadingPOS } from './actions'

const mapStateToProps = (state: ApplicationState): POSStateProps => ({
    isLoadingPOS: selectIsLoadingPOS(state),
    layout: selectLayout(state)
});

const mapDispatchToProps: POSDispatchProps = {
    loadPOS: loadPOS.started,
    savePOSPreferences: savePOSPreferences.started,
    setEditing: setEditingPOS,
    setLoading: setLoadingPOS
};

const hocs = {
    redux: {
        mapDispatchToProps,
        mapStateToProps
    },
    i18n: ["common"],
    styles: POSStyles
};

export default connects<{}, POSStateProps, POSDispatchProps>(POS, hocs);