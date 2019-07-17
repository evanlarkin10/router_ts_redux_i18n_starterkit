import { createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
const POSStyles = (theme: Theme) =>
    createStyles({
        removeStyle: {
            right: "2px",
            top: 0,
            cursor: "pointer"
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            alignItems: 'center'
        },
        gridItem: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        card: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        cardContent: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        fab: {
            margin: theme.spacing(1),
            alignSelf: 'right'
        },
    });
export default POSStyles;
