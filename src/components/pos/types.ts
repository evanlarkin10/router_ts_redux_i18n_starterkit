import posStyles from "./posStyles";
import StyledElement from "@common/StyledElement";
// import { WidthProvider, Responsive } from "react-grid-layout";
import { WidthProviderProps, Layout, ReactGridLayoutProps, ResponsiveProps } from "react-grid-layout"
import { loadPOS, savePOSPreferences, setEditingPOS } from "./actions";
export type POSProps = ReactGridLayoutProps & StyledElement<typeof posStyles> & ResponsiveProps & WidthProviderProps & any & POSStateProps & POSDispatchProps & {};

export interface POSStateProps {
    isLoadingPOS: boolean;
    isEditingPOS: boolean;
    layout: Layout[];
}
export interface POSDispatchProps {
    loadPOS: typeof loadPOS.started;
    savePOSPreferences: typeof savePOSPreferences.started
    setEditing: typeof setEditingPOS
}

export const registerButtons = [
    {
        i: " ",
        x: 1,
        y: 4,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: ".",
        x: 3,
        y: 4,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "0",
        x: 2,
        y: 4,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "1",
        x: 1,
        y: 3,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "2",
        x: 2,
        y: 3,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "3",
        x: 3,
        y: 3,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "4",
        x: 1,
        y: 2,
        w: 1,
        h: 1,
        static: true
    }, {
        i: "5",
        x: 2,
        y: 2,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "6",
        x: 3,
        y: 2,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "7",
        x: 1,
        y: 1,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "8",
        x: 2,
        y: 1,
        w: 1,
        h: 1,
        static: true
    },
    {
        i: "9",
        x: 3,
        y: 1,
        w: 1,
        h: 1,
        static: true
    },


]