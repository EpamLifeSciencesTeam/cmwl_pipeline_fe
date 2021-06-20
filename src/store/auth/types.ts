// Action Definition

export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_FAILURE = 'AUTH_SIGN_IN_FAILURE';
export const AUTH_SIGN_UP_SUCCESS = 'AUTH_SIGN_UP_SUCCESS';
export const AUTH_SIGN_UP_FAILURE = 'AUTH_SIGN_UP_FAILURE';

export const AUTH_AUTHENTICATE_USER = 'AUTH_AUTHENTICATE_USER';

export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';
export const AUTH_SESSION_EXPIRED = 'AUTH_SESSION_EXPIRED';

export interface SignInData {
  email: string
  password: string
}

export interface SignUpData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface AuthHeaders {
  accessToken: string
  refreshToken: string
}

export interface AuthState {
  isAuthenticated: boolean
}

interface AuthSignInSuccessAction {
  type: typeof AUTH_SIGN_IN_SUCCESS
  authHeaders: AuthHeaders
}

interface AuthSignInFailureAction {
  type: typeof AUTH_SIGN_IN_FAILURE
}

interface AuthSignUpSuccessAction {
  type: typeof AUTH_SIGN_UP_SUCCESS
  authHeaders: AuthHeaders
}

interface AuthSignUpFailureAction {
  type: typeof AUTH_SIGN_UP_FAILURE
}

interface AuthAuthenticateUserAction {
  type: typeof AUTH_AUTHENTICATE_USER
}

interface AuthSignOutAction {
  type: typeof AUTH_SIGN_OUT
}

interface AuthSessionExpiredAction {
  type: typeof AUTH_SESSION_EXPIRED
}

export type AuthActionTypes =
  | AuthSignInSuccessAction
  | AuthSignInFailureAction
  | AuthSignUpSuccessAction
  | AuthSignUpFailureAction
  | AuthAuthenticateUserAction
  | AuthSignOutAction
  | AuthSessionExpiredAction
