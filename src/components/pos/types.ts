import posStyles from "./posStyles";
import StyledElement from "@common/StyledElement";
import {
  WidthProviderProps,
  Layout,
  ReactGridLayoutProps,
  ResponsiveProps
} from "react-grid-layout";
import {
  setEditingPOS,
  setLoadingPOS,
  openAddButtonModal,
  closeAddButtonModal,
  openPaymentTypeModal,
  closePaymentTypeModal
} from "./actions";
import { savePOSPreferences } from "redux/UserAPI/actions";
export type POSProps = ReactGridLayoutProps &
  StyledElement<typeof posStyles> &
  ResponsiveProps &
  WidthProviderProps &
  any &
  POSStateProps &
  POSDispatchProps & {};

export interface POSState {
  items: POSLayout[];
  cols: any;
  layouts: { lg: POSLayout[] };
  layout: POSLayout[];
  breakpoint: any;
  isEditing: boolean;
  amount: string;
  total: number;
  receiptItems: ReceiptItem[];
}
export type ReceiptItem = {
  title: string;
  amount: number;
};
export interface POSStateProps {
  isLoadingPOS: boolean;
  layouts: { lg: POSLayout[]; md: POSLayout[]; sm: POSLayout[] };
  addModalOpen: boolean;
  paymentTypeModalOpen: boolean;
}
export interface POSDispatchProps {
  savePOSPreferences: typeof savePOSPreferences.started;
  setEditing: typeof setEditingPOS;
  setLoading: typeof setLoadingPOS;
  openAddModal: typeof openAddButtonModal;
  closeAddModal: typeof closeAddButtonModal;
  openPaymentTypeModal: typeof openPaymentTypeModal;
  closePaymentTypeModal: typeof closePaymentTypeModal;
}

interface customLayout {
  amount: number;
}
export type POSLayout = Layout & customLayout;

export const registerButtons = [
  {
    i: "Custom",
    x: 1,
    y: 5,
    w: 2,
    h: 1,
    static: true
  },
  {
    i: "AMT",
    x: 3,
    y: 5,
    w: 1,
    h: 1,
    static: true
  },
  {
    i: "00",
    x: 1,
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
    i: ".",
    x: 3,
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
  },
  {
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
  }
];
