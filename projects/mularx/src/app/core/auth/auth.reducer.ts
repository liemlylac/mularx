import { Action, createReducer, on } from '@ngrx/store';
import { authLogin, authLogout } from './auth.actions';
import { AuthState } from './auth.model';


export const initialState: AuthState = {
  isAuthenticated: false,
}

const reducer = createReducer(
  initialState,
  on(authLogin, (state) => ({ ...state, isAuthenticated: true })),
  on(authLogout, (state) => ({ ...state, isAuthenticated: false })),
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
