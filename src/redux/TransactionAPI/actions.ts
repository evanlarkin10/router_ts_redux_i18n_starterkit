import actionCreatorFactory from "typescript-fsa";
import { TRANSACTION_REDUCER_NAME } from "./constants";
import Transaction from "models/Transaction";
const actionCreator = actionCreatorFactory(TRANSACTION_REDUCER_NAME);
export enum ActionType {
  SET_LOADING_TRANSACTIONS = "SET_LOADING_TRANSACTIONS",
  LOAD_TRANSACTIONS = "LOAD_TRANSACTIONS"
}

export const setLoadingTransactions = actionCreator<Boolean>(
  ActionType.SET_LOADING_TRANSACTIONS
);
export const loadTransactions = actionCreator.async<void, Transaction, string>(
  ActionType.LOAD_TRANSACTIONS
);
