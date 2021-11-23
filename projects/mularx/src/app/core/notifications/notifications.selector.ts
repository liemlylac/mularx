import { createSelector } from '@ngrx/store';
import { selectNotificationsState } from '../core.state';
import { notificationAdapter } from './notifications.reducer';

const { selectEntities, selectAll } = notificationAdapter.getSelectors();

export const selectNotifications = createSelector(
  selectNotificationsState,
  (state) => state
);

export const selectAllNotifications = createSelector(selectNotifications, selectAll);
export const selectNotificationEntities = createSelector(selectNotifications, selectEntities);
