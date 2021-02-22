import { AUTH_LOG_IN_SUCCESS, AUTH_LOG_OUT, AuthActionTypes, LogInData } from './types';
import { CmwlThunkAction } from '../index';

const logInSuccess = (): AuthActionTypes => {
  return {
    type: AUTH_LOG_IN_SUCCESS
  };
};

export const logIn = (logInData: LogInData): CmwlThunkAction => {
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
