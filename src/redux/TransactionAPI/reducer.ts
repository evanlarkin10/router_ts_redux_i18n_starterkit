import { Action } from "typescript-fsa";
import Transaction from "models/Transaction";

export interface TransactionState {
  isLoadingTransactions: boolean;
  transactions: Array<Transaction> | [];
}

export const initialState: TransactionState = {
  isLoadingTransactions: false,
  transactions: []
};

export const transactionReducer = (
  state: TransactionState = initialState,
  action: Action<any>
): TransactionState => {
  console.log(action);
  switch (action.type) {
    case "transactionReducer/LOAD_TRANSACTIONS_STARTED":
      return { ...state, isLoadingTransactions: true };
    case "transactionReducer/LOAD_TRANSACTIONS_DONE":
      return {
        ...state,
        transactions: action.payload.result,
        isLoadingTransactions: false
      };
    case "transactionReducer/LOAD_TRANSACTIONS_FAILED":
      return { ...state, isLoadingTransactions: false };
    case "transactionReducer/SET_TRANSACTIONS_LOADING":
      return { ...state, isLoadingTransactions: action.payload };

    default:
      return { ...state };
  }
};
