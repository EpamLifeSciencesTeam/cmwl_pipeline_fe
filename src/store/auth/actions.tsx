import { AUTH_LOG_IN_SUCCESS, AUTH_LOG_OUT, AuthActionTypes, LogInData } from './types';
import { AppThunkAction } from '../index';

const logInSuccess = (): AuthActionTypes => {
  return {
    type: AUTH_LOG_IN_SUCCESS
  };
};

export const logIn = (logInData: LogInData): AppThunkAction => {
  console.log(logInData);
  return dispatch => {
    dispatch(logInSuccess());
    // ToDo: Add axios async call
  };
}

export const logOut = (): AuthActionTypes => {
  return {
    type: AUTH_LOG_OUT
  };
};
