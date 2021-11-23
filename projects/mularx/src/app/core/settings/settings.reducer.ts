import { Action, createReducer, on } from '@ngrx/store';
import {
  actionSettingsChangeHour,
  actionSettingsChangeLanguage,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeTheme
} from './settings.action';
import { SettingsState } from './settings.model';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'DEFAULT-THEME',
  stickyHeader: true,
  hour: 0
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeLanguage,
    actionSettingsChangeTheme,
    actionSettingsChangeStickyHeader,
    actionSettingsChangeHour,
    (state, action) => ({ ...state, ...action })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
