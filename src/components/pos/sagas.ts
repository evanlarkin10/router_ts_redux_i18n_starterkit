
import { takeLatest, put } from 'redux-saga/effects'
import { loadPOS, setLoadingPOS, savePOSPreferences } from './actions'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'
import { API, graphqlOperation } from "aws-amplify";
import { Action } from 'typescript-fsa'
import { Layout } from 'react-grid-layout'

export function* handleLoadPOS() {
    yield put(setLoadingPOS(true))
    try {
        const result = yield API.graphql(graphqlOperation(queries.getUser))
        yield put(loadPOS.done(JSON.parse(result.data.getUser.preferences)))
        yield put(setLoadingPOS(false))
    }
    catch (error) {
        console.log("ERROR", error)
        yield put(loadPOS.failed({ params: null, error: "Failed getting user" }))
        yield put(setLoadingPOS(false))
    }

}

export function* handleSavePreferences(action: Action<Layout>) {
    yield put(setLoadingPOS(true))
    try {
        const input = {
            preferences: JSON.stringify(action.payload)
        }
        yield API.graphql(graphqlOperation(mutations.updateUser, { input }))

    }
    catch (error) {
        console.log("ERROR", error)
        yield put(loadPOS.failed({ params: null, error: "Failed getting user" }))
    }
    yield put(setLoadingPOS(false))
}

export default function* () {
    yield takeLatest(loadPOS.started, handleLoadPOS)
    yield takeLatest(savePOSPreferences.started, handleSavePreferences)
}