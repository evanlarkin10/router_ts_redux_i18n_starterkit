import { createStyles } from '@material-ui/styles';
import { Theme } from "@material-ui/core";

export const styles = ({ palette, spacing, mixins }: Theme) => createStyles({
    container: {
        justifyContent: "center",
        width: '50%'
    },
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(require("./authPhoto.png"))`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    body: {
        backgroundColor: palette.common.white,
    },
    paper: {
        margin: spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: spacing(4),
        backgroundColor: palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: spacing(4),
    },
    submit: {
        margin: spacing(3, 0, 2),
    },
    field: {
        marginTop: spacing(3)
    },
    actions: mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: spacing(3),
        display: "flex",
        flexDirection: "row",
        alignContent: "center"
    }),
    button: {
        marginRight: spacing(1)
    },
    cardHeader: {
        backgroundColor: palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: spacing(2),
    },
});