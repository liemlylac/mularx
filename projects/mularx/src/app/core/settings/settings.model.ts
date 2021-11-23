import { AppState } from '../core.state';

export type Language = 'en' | 'vi';

export interface SettingsState {
  language: string;
  theme: string;
  stickyHeader: boolean;
  hour: number;
}

export interface State extends AppState {
  settings: SettingsState;
}
