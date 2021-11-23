import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, timeInterval } from 'rxjs/operators';
import { selectIsAuthenticated } from '../auth/auth.selectors';
import { AppState } from '../core.state';

import { Notification, NotificationResponse } from './notifications.model';

import { generateName, generateShortContent, generateUrl, generateUUID, randomNumber } from '../mock/mock.helper';
import Timeout = NodeJS.Timeout;
import { interval } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  range: any = {
    from: null,
    to: null
  };

  isAuthenticated$: Observable<boolean> | undefined;

  timer: Timeout | undefined;

  constructor(
    private store: Store<AppState>,
  ) {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  markAsRead(notifies: Notification[]) {
    const notifyIds = [...new Set(notifies.map(i => i.id))];
    console.log(`Mark as read for item(s): `, notifyIds);
    return of({ result: 'Success', items: notifies.length }).pipe(delay(500));
  }

  markAsClicked(notifies: Notification[]) {
    const notifyIds = [...new Set(notifies.map(i => i.id))];
    console.log(`Mark as clicked for item(s): `, notifyIds);
    return of({ result: 'Success', items: notifies.length }).pipe(delay(500));
  }

  getNotifications(userId: string): Observable<NotificationResponse> {
    return of({
      notifies: this.generateNotifies(randomNumber(0, 7)),
    }).pipe(delay(3000));
  }

  intervalRefresh() {
    return interval(10 * 1000).pipe(
      timeInterval(),
      mergeMap(() => this.refresh())
    );
  }

  refresh() {
    return of({
      from: this.range.from,
      notifies: this.generateNotifies(randomNumber(0,2), { read: false, clicked: false}),
    }).pipe(delay(1000));
  }

  loadMore(): Observable<NotificationResponse> {
    return of({
      from: this.range.from,
      notifies: this.generateNotifies(5, { read: true }),
    }).pipe(delay(3000));
  }

  /**
   * For mock purpose only
   * @param numberOfNotify number of notify you want to generate
   * @param options new notifications is read? or is clicked
   */
  generateNotifies(numberOfNotify: number, options?: { read?: boolean, clicked?: boolean }): Notification[] {
    const notifies = [];
    for (let i = 0; i < numberOfNotify; i++) {
      const notify: Notification = {
        id: generateUUID(),
        content: generateShortContent(),
        datetime: new Date(),
        url: !randomNumber(0, 1) ? generateUrl() : undefined,
        from: { name: generateName() },
        alreadyClicked: options?.clicked ?? !randomNumber(0, 1),
        alreadyRead: options?.read ?? !randomNumber(0, 1),
      };

      notifies.push(notify);
    }
    return notifies;
  }

}
