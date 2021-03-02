import { authReducer } from './auth/reducers';
import { AnyAction, combineReducers } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>

export type CmwlThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type CmwlThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>
