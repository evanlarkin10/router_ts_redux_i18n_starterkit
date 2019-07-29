import { savePOSPreferences } from "./actions";
import { Action } from "typescript-fsa";
import { POSLayouts } from "./types";
import { takeLatest } from "redux-saga/effects";
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
export default function*() {
  yield takeLatest(savePOSPreferences, handleSavePOSPreferences);
}
