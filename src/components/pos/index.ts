import { connects } from "utilities/commonHocs";
import POS from "./POS";
import POSStyles from './posStyles'
import { POSDispatchProps, POSStateProps } from './types'
import { ApplicationState } from 'reducer'
import { selectIsLoadingPOS, selectIsEditingPOS, selectLayout } from "./selectors";
import { loadPOS, savePOSPreferences, setEditingPOS } from './actions'

const mapStateToProps = (state: ApplicationState): POSStateProps => ({
    isLoadingPOS: selectIsLoadingPOS(state),
    isEditingPOS: selectIsEditingPOS(state),
    layout: selectLayout(state)
});

const mapDispatchToProps: POSDispatchProps = {
    loadPOS: loadPOS.started,
    savePOSPreferences: savePOSPreferences.started,
    setEditing: setEditingPOS
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