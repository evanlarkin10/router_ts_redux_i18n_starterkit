
import { takeLatest, put, call } from 'redux-saga/effects'
import { loadPOS, savePOSPreferences } from './actions'
import * as mutations from 'graphql/mutations'
import { API, graphqlOperation } from "aws-amplify";
import { Action } from 'typescript-fsa'
import { Layout } from 'react-grid-layout'
import { handleSetUser } from 'redux/UserAPI/sagas'
export function* handleSavePreferences(action: Action<Layout>) {
    console.log("Save Preferences handle start")
    try {
        const input = {
            preferences: JSON.stringify(action.payload)
        }
        yield API.graphql(graphqlOperation(mutations.updateUser, { input }))
        console.log("set user call")
        yield call(handleSetUser)

    }
    catch (error) {
        yield put(loadPOS.failed({ params: null, error: "Failed getting user" }))
    }
}

export default function* () {
    yield takeLatest(savePOSPreferences.started, handleSavePreferences)
}