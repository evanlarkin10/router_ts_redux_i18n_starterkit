import posStyles from "./posStyles";
import StyledElement from "@common/StyledElement";
// import { WidthProvider, Responsive } from "react-grid-layout";
import { ResponsiveProps, WidthProviderProps } from "react-grid-layout"
export type POSProps = StyledElement<typeof posStyles> & ResponsiveProps & WidthProviderProps & any;

export const registerButtons = [
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