import { authReducer } from './auth/reducers';
import { AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>
