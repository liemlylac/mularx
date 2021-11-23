import { createSelector } from '@ngrx/store';
import { selectSettingsState } from '../core.state';
import { SettingsState } from './settings.model';

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectTheme = createSelector(
  selectSettings,
  (settings) => settings.theme
);

export const selectSettingsStickyHeader = createSelector(
  selectSettings,
  (state: SettingsState) => state.stickyHeader
);

export const selectSettingsLanguage = createSelector(
  selectSettings,
  (state: SettingsState) => state.language
);

export const selectSettingsTheme = createSelector(
  selectTheme,
  (theme) => theme.toLowerCase(),
);



