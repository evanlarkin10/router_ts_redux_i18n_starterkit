import { savePOSPreferences, processTransaction } from "./actions";
import { Action } from "typescript-fsa";
import { POSLayouts } from "./types";
import { takeLatest } from "redux-saga/effects";
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from 'graphql/mutations'
import User from "models/User";

export function* handleSavePOSPreferences(action: Action<POSLayouts>) {
  try {
    const preferences = action.payload;
    console.log(preferences);
    yield User.updatePreferences({ pos: { layouts: preferences } });
  } catch (e) {
    console.log("err", e);
  }
}
export function* handleProcessTranscation(action: Action<Object>){
  try{
    const input = action.payload
    yield API.graphql(graphqlOperation(mutations.createTransaction, {input}));
  }
  catch(err){
    console.log("Error", err)
  }
}
export default function*() {
  yield takeLatest(savePOSPreferences, handleSavePOSPreferences);
  yield takeLatest(processTransaction, handleProcessTranscation);
}
