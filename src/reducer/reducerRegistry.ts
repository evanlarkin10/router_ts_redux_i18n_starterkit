import { Reducer, ReducersMapObject } from "redux";
import { ApplicationState } from "reducer";

type ChangeEmitter<S> = (reducers: ReducersMapObject<S>) => void;

export class ReducerRegistry<S> {
  private _emitChange: ChangeEmitter<S>;
  private _reducers: ReducersMapObject<S>;

  constructor() {
    this._emitChange = null;
    this._reducers = {} as any;
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name: string, reducer: Reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: ChangeEmitter<S>) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry<ApplicationState>();
export default reducerRegistry;
