import { takeLatest, put, call } from "redux-saga/effects";
import { savePOSPreferences } from "./actions";
import * as mutations from "graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import User, { UserDto } from "models/User";
import { POSLayout } from "./types";
import { Action } from "typescript-fsa";
import { handleSetUser } from "redux/UserAPI/sagas";
export function* handleSavePreferences(action: Action<POSLayout>) {
  console.log("Save Preferences handle start");
  try {
    const input = {
      preferences: JSON.stringify(action.payload)
    };
    console.log("Input", input);
    yield API.graphql(graphqlOperation(mutations.updateUser, { input }));
    console.log("set user call");
    yield call(handleSetUser);
    const newUser = new User(JSON.parse(
      Cookie.get(COOKIE_USER_KEY)
    ) as UserDto);
    yield put(
      savePOSPreferences.done({ params: action.payload, result: newUser })
    );
  } catch (error) {
    console.log("error", error);
    yield put(
      savePOSPreferences.failed({ params: null, error: "Failed getting user" })
    );
  }
}

export default function*() {
  yield takeLatest(savePOSPreferences.started, handleSavePreferences);
}
