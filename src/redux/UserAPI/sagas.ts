import { takeLatest, put } from "redux-saga/effects";
import { setUser, savePOSPreferences } from "./actions";
import * as queries from "graphql/queries";
import * as mutations from "graphql/mutations";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";
import User, { UserDto } from "models/User";
import { Layout } from "react-grid-layout";
import { Action } from "typescript-fsa";
// Not used?
export function* handleSetUser() {
  try {
    console.log("handlesetUser begin");
    // yield put(setLoading(true))
    let user = null;
    const result = yield API.graphql(graphqlOperation(queries.getUser));
    if (result.data.getUser === null) {
      const identity_user = yield Auth.currentUserInfo();
      const input = {
        identity_id: identity_user.id,
        org_id: identity_user.attributes["custom:org_id"],
        org_name: identity_user.attributes["custom:org_name"],
        email: identity_user.attributes.email,
        first_name: identity_user.attributes.given_name,
        last_name: identity_user.attributes.family_name,
        email_verified: identity_user.attributes.email_verified,
        preferences: {}
      };
      API.graphql(graphqlOperation(mutations.createUser, { input })).then(
        () => {
          // created new user record
          user = result;
          Cookie.set(COOKIE_USER_KEY, result, {
            expires: 1
          });
        }
      );
    } else {
      // user record already made
      user = result;
      console.log("set cookie");
      Cookie.set(COOKIE_USER_KEY, user.data.getUser, {
        expires: 1
      });
    }
    console.log("setUser.done");
    const newUser = new User(JSON.parse(
      Cookie.get(COOKIE_USER_KEY)
    ) as UserDto);
    yield put(setUser.done({ result: newUser }));
    console.log("handlesetUser done");
  } catch (error) {
    console.log("error", error);
    yield put(setUser.failed({ params: null, error: "Failed getting user" }));
  }
  // yield put(setLoading(false))
}

export function* handleSavePreferences(action: Action<Layout>) {
  console.log("Save Preferences handle start");
  try {
    const input = {
      preferences: JSON.stringify(action.payload)
    };
    yield API.graphql(graphqlOperation(mutations.updateUser, { input }));
    console.log("set user call");
    yield handleSetUser();
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
  yield takeLatest(setUser.started, handleSetUser);
  yield takeLatest(savePOSPreferences.started, handleSavePreferences);
}
