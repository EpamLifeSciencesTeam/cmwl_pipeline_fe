import { Action, AnyAction, combineReducers, Dispatch } from 'redux';
import { all } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

export interface ApplicationState {
  router: RouterState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history)
});

export function* rootSaga() {
  yield all([]);
}
