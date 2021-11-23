import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import {
  actionNotificationConcat,
  actionNotificationSetAll, actionNotificationUnshift, actionNotificationUpdateMany,
  actionNotificationUpdateOne
} from './notifications.action';
import { Notification, NotificationState } from './notifications.model';

export const notificationAdapter: EntityAdapter<Notification> = createEntityAdapter<Notification>({
  sortComparer: false
});

const { selectAll } = notificationAdapter.getSelectors();

export const initialState: NotificationState = notificationAdapter.getInitialState({
  ids: [],
  entities: {}
});

const reducer = createReducer(
  initialState,
  on(actionNotificationSetAll, (state, { notifies }) =>{
    return notificationAdapter.setAll(notifies, state)
  }),
  on(actionNotificationUnshift, (state, { notifies }) => {
    return notificationAdapter.setAll([...notifies, ...selectAll(state)], {...state});
  }),
  on(actionNotificationConcat, (state, { notifies }) => {
    return notificationAdapter.addMany(notifies, state);
  }),
  on(actionNotificationUpdateOne, (state, { update }) => {
    return notificationAdapter.updateOne(update, state);
  }),
  on(actionNotificationUpdateMany, (state, { updates }) => {
    return notificationAdapter.updateMany(updates, state);
  })
);

export function notificationReducer(state: NotificationState | undefined, action: Action) {
  return reducer(state, action);
}
