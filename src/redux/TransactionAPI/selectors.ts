import { ApplicationState } from "reducer";
import { TRANSACTION_REDUCER_NAME } from "./constants";

export const selectTransactions = (state: ApplicationState) => {
  return state[TRANSACTION_REDUCER_NAME].transactions
    ? state[TRANSACTION_REDUCER_NAME].transactions
    : null;
};

export const selectLoadingTransactions = (state: ApplicationState) => {
  return state[TRANSACTION_REDUCER_NAME].isLoadingTransactions
    ? state[TRANSACTION_REDUCER_NAME].isLoadingTransactions
    : null;
};
