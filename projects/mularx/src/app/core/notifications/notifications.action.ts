import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Notification, NotificationResponse } from './notifications.model';

export const actionNotificationSetAll = createAction(
  '[Notifications] Set all',
  props<NotificationResponse>(),
);

export const actionNotificationUpdateOne = createAction(
  '[Notifications] Update One',
  props<{ update: Update<Notification> }>(),
);

export const actionNotificationUpdateMany = createAction(
  '[Notifications] Update Many',
  props<{ updates: Update<Notification>[] }>(),
);

export const actionNotificationUnshift = createAction(
  '[Notification] Unshift',
  props<NotificationResponse>()
);

export const actionNotificationConcat = createAction(
  '[Notification] Concat',
  props<NotificationResponse>()
);
