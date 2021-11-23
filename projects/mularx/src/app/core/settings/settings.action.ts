import { createAction, props } from '@ngrx/store';

import { Language } from './settings.model';

export const actionSettingsChangeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>(),
);

export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: string }>(),
);

export const actionSettingsChangeStickyHeader = createAction(
  '[Settings] Change Sticky Header',
  props<{ stickyHeader: boolean }>(),
);

export const actionSettingsChangeHour = createAction(
  '[Settings] Change Hour',
  props<{ hour: number }>(),
);

