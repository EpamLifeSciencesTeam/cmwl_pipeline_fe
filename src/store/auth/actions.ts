import {
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_SUCCESS,
  AuthActionTypes,
  SignInData,
  SignUpData
} from './types';
import { CmwlThunkAction } from '../index';

const signInSuccess = (): AuthActionTypes => ({
  type: AUTH_SIGN_IN_SUCCESS
});

const signUpSuccess = (): AuthActionTypes => ({
  type: AUTH_SIGN_UP_SUCCESS
});

export const signIn = (signInData: SignInData): CmwlThunkAction => (dispatch => {
  dispatch(signInSuccess());
  // ToDo: Add axios async call
});

export const signUp = (signUpData: SignUpData): CmwlThunkAction => (dispatch => {
  dispatch(signUpSuccess());
  // ToDo: Add axios async call
});

export const signOut = (): AuthActionTypes => ({
  type: AUTH_SIGN_OUT
});
