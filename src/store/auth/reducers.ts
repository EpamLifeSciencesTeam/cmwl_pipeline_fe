import {
  AUTH_LOG_IN_FAILURE,
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_OUT,
  AuthActionTypes,
  AuthState
} from './types';

const initialState: AuthState = {
  isAuthenticated: false
};

export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case AUTH_LOG_IN_SUCCESS:
      // ToDo: Save AuthToken to the local store
      // ToDo: Save RefreshToken to the local store
      // ToDo: Save AuthTokenExpiration to the local store
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTH_LOG_IN_FAILURE:
      console.log('AUTH_LOG_IN_FAILURE');
      return state;
    case AUTH_LOG_OUT:
      // ToDo: Remove AuthToken from the local store
      // ToDo: Remove RefreshToken from the local store
      // ToDo: Remove AuthTokenExpiration from the local store
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
