import { Action, AnyAction, combineReducers, Dispatch } from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

export interface ApplicationState {
  router: Readonly<RouterState>
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Readonly<Dispatch<A>>
}

export const createRootReducer = (history: History) => combineReducers<ApplicationState>({
  router: connectRouter(history)
});

export function* rootSaga() {
  yield all([]);
}
