import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { AuthState } from './auth/auth.model';
import { authReducer } from './auth/auth.reducer';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { NotificationState } from './notifications';
import { notificationReducer } from './notifications/notifications.reducer';
import { RouterStateUrl } from './router/router.state';
import { SettingsState } from './settings/settings.model';
import { settingsReducer } from './settings/settings.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  notifications: notificationReducer,
  router: routerReducer,
}

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage
]

export const selectAuthState = createFeatureSelector<AuthState>(
  'auth'
);

export const selectSettingsState = createFeatureSelector<SettingsState>(
  'settings'
);

export const selectNotificationsState = createFeatureSelector<NotificationState>(
  'notifications'
);

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>(
  'router'
);

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  notifications: NotificationState;
  router: RouterReducerState<RouterStateUrl>
}
