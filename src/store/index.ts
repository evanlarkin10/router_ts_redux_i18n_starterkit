/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from "redux-thunk";
import { rootReducer, ApplicationState } from "../reducer";
import createSagaMiddleware from 'redux-saga'
import { sagaCtx } from './getSagas'
const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
// Create the root reducer
const reducer = combineReducers<ApplicationState>({
  ...rootReducer
});

// Create a configure store function of type `ApplicationState`
export function configureStore(): Store<ApplicationState, any> {
  const store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
  );

  const defaultSagas = sagaCtx.keys().map((key) => sagaCtx(key).default)
  defaultSagas.map(sagaMiddleware.run)

  return store;
}
const store = configureStore();
export default store;
