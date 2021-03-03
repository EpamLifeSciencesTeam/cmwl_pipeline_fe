// Action Definition

export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_FAILURE = 'AUTH_SIGN_IN_FAILURE';
export const AUTH_SIGN_UP_SUCCESS = 'AUTH_SIGN_UP_SUCCESS';
export const AUTH_SIGN_UP_FAILURE = 'AUTH_SIGN_UP_FAILURE';

export const AUTH_SIGN_OUT = 'AUTH_SIGN_OUT';

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

export interface AuthState {
  isAuthenticated: boolean
}

interface AuthSignInSuccessAction {
  type: typeof AUTH_SIGN_IN_SUCCESS
}

interface AuthSignInFailureAction {
  type: typeof AUTH_SIGN_IN_FAILURE
}

interface AuthSignUpSuccessAction {
  type: typeof AUTH_SIGN_UP_SUCCESS
}

interface AuthSignUpFailureAction {
  type: typeof AUTH_SIGN_UP_FAILURE
}

interface AuthSignOutAction {
  type: typeof AUTH_SIGN_OUT
}

export type AuthActionTypes =
  | AuthSignInSuccessAction
  | AuthSignInFailureAction
  | AuthSignUpSuccessAction
  | AuthSignUpFailureAction
  | AuthSignOutAction
