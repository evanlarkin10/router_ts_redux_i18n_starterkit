
import { takeLatest, put } from 'redux-saga/effects'
import { loadUser, setLoading } from './actions'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as Cookie from "js-cookie";
import { COOKIE_USER_KEY } from "utilities/auth/constants";

export function* handleLoadUser() {
    yield put(setLoading(true))
    try {
        let user = null
        const result = yield API.graphql(graphqlOperation(queries.getUser))
        if (result.data.getUser === null) {
            const identity_user = yield Auth.currentUserInfo();
            const input = {
                identity_id: identity_user.id,
                org_id: identity_user.attributes["custom:org_id"],
                org_name: identity_user.attributes['custom:org_name'],
                email: identity_user.attributes.email,
                first_name: identity_user.attributes.given_name,
                last_name: identity_user.attributes.family_name,
                email_verified: identity_user.attributes.email_verified,
                preferences: {}
            };
            API.graphql(graphqlOperation(mutations.createUser, { input }))
                .then(() => {
                    // created new user record
                    user = result
                    Cookie.set(COOKIE_USER_KEY, result, {
                        expires: 1
                    });
                })
        }
        else {
            // user record already made
            user = result
            Cookie.set(COOKIE_USER_KEY, user, {
                expires: 1
            });

        }
        yield put(loadUser.done(user))
    }
    catch (error) {
        yield put(loadUser.failed({ params: null, error: "Failed getting user" }))
    }
    yield put(setLoading(false))
}

export default function* () {
    yield takeLatest(loadUser.started, handleLoadUser)
}