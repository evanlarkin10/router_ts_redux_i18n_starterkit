import { takeLatest, put } from "redux-saga/effects";
import { loadTransactions } from "./actions";
import * as queries from "graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

export function* handleLoadTransactions() {
  try {
    const results = yield API.graphql(
      graphqlOperation(queries.listTransactions)
    );
    yield put(
      loadTransactions.done({ result: results.data.listTransactions.items })
    );
  } catch (error) {
    yield put(
      loadTransactions.failed({ params: null, error: "Failed getting user" })
    );
  }
}

export default function*() {
  yield takeLatest(loadTransactions.started, handleLoadTransactions);
}
