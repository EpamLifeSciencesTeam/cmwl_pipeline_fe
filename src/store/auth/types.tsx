// Action Definition

export const AUTH_LOG_IN_SUCCESS = 'AUTH_LOG_IN_SUCCESS';
export const AUTH_LOG_IN_FAILURE = 'AUTH_LOG_IN_FAILURE';

export const AUTH_LOG_OUT = 'AUTH_LOG_OUT';

export interface LogInData {
  email: string
  password: string
}

export interface AuthState {
  isAuthenticated: boolean
}

interface AuthLogInSuccessAction {
  type: typeof AUTH_LOG_IN_SUCCESS
}

interface AuthLogInFailureAction {
  type: typeof AUTH_LOG_IN_FAILURE
}

interface AuthLogOutAction {
  type: typeof AUTH_LOG_OUT
}

export type AuthActionTypes = AuthLogInSuccessAction | AuthLogInFailureAction |
  AuthLogOutAction
