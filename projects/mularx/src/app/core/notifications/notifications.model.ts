import { EntityState } from '@ngrx/entity';

export interface Notification {
  id: string;
  content: string;
  datetime: Date;
  url?: string;
  from: {
    name: string;
    icon?: string
  }
  alreadyClicked: boolean;
  alreadyRead: boolean;
}

export type NotificationState = EntityState<Notification>;

export interface NotificationResponse {
  notifies: Notification[];
}
