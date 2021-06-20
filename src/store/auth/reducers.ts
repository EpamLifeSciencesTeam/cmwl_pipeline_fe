import {
  AUTH_AUTHENTICATE_USER,
  AUTH_SESSION_EXPIRED,
  AUTH_SIGN_IN_FAILURE,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SIGN_UP_FAILURE,
  AUTH_SIGN_UP_SUCCESS,
  AuthActionTypes,
  AuthState
} from './types';

const initialState: AuthState = {
  isAuthenticated: false
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
    case AUTH_SIGN_UP_SUCCESS:
      localStorage.setItem('accessToken', action.authHeaders.accessToken);
      localStorage.setItem('refreshToken', action.authHeaders.refreshToken);
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTH_SIGN_IN_FAILURE:
      console.log('AUTH_SIGN_IN_FAILURE');
      return state;
    case AUTH_SIGN_UP_FAILURE:
      console.log('AUTH_SIGN_UP_FAILURE');
      return state;
    case AUTH_AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTH_SIGN_OUT:
    case AUTH_SESSION_EXPIRED: // ToDo: Handle session expiration with specific user notification
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
