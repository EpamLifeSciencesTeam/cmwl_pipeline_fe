import {
  AUTH_AUTHENTICATE_USER,
  AUTH_SESSION_EXPIRED,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_SUCCESS,
  AuthActionTypes,
  AuthHeaders,
  SignInData,
  SignUpData
} from './types';
import { CmwlThunkAction } from '../index';
import axiosCromwell from '../../axiosCromwell';
import { AxiosResponse } from "axios";

const signInSuccess = (authHeaders: AuthHeaders): AuthActionTypes => ({
  type: AUTH_SIGN_IN_SUCCESS,
  authHeaders: authHeaders
});

const signUpSuccess = (authHeaders: AuthHeaders): AuthActionTypes => ({
  type: AUTH_SIGN_UP_SUCCESS,
  authHeaders: authHeaders
});

export const signIn = (signInData: SignInData): CmwlThunkAction => (dispatch => {
  axiosCromwell.post('/auth/signIn', signInData).then(response => {
    const authHeaders = getAuthHeaders(response);
    dispatch(signInSuccess(authHeaders));
  }).catch(error => console.log(error))
});

export const signUp = (signUpData: SignUpData): CmwlThunkAction => (dispatch => {
  axiosCromwell.post('/auth/signUp', signUpData).then(response => {
    const authHeaders = getAuthHeaders(response);
    dispatch(signUpSuccess(authHeaders));
  }).catch(error => console.log(error))
});

export const authenticateUser: AuthActionTypes = {
  type: AUTH_AUTHENTICATE_USER
}

export const signOut: AuthActionTypes = {
  type: AUTH_SIGN_OUT
}

export const sessionExpired: AuthActionTypes = {
  type: AUTH_SESSION_EXPIRED
}

const getAuthHeaders = (response: AxiosResponse): AuthHeaders => ({
  accessToken: response.headers['access-token'],
  refreshToken: response.headers['refresh-token']
});
