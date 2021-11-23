import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewChild,
  ElementRef, ChangeDetectorRef
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, interval, Subject } from 'rxjs';
import { mergeMap, take, takeUntil, timeInterval } from 'rxjs/operators';

import { AlertService } from '../../core/alerts/alert.service';
import { AppState } from '../../core/core.state';
import { Notification, NotificationsService } from '../../core/notifications';
import {
  actionNotificationConcat,
  actionNotificationSetAll, actionNotificationUnshift, actionNotificationUpdateMany,
  actionNotificationUpdateOne
} from '../../core/notifications/notifications.action';

import {
  selectAllNotifications,
} from '../../core/notifications/notifications.selector';

@Component({
  selector: 'mrx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  loading: boolean = false;

  @ViewChild('scrollable')
  private scrollContainer: ElementRef;

  timer: NodeJS.Timeout;
  notifies$: Observable<Notification[]>;

  unClicked: Notification[];
  unread: Notification[];
  hasNoItems: boolean;
  isLoadMore: boolean = false;

  constructor(
    private store: Store<AppState>,
    private notificationService: NotificationsService,
    private alertService: AlertService,
    private translate: TranslateService,
    private cd: ChangeDetectorRef,
  ) {
    this.notifies$ = this.store.pipe(select(selectAllNotifications));
  }

  isLoading(isLoading: boolean) {
    this.loading = isLoading
  }

  ngOnInit(): void {
    this.isLoading(true);
    this.notificationService.getNotifications('UserID_1234567890')
      .pipe(take(1))
      .subscribe((res) => {
      this.isLoading(false);
      this.store.dispatch(actionNotificationSetAll(res));
      this.isLoadMore = res.notifies.length > 4;
    });

    this.intervalUpdate();

    this.notifies$.pipe(takeUntil(this.destroy$)).subscribe((notifies) => {
      this.unClicked = notifies.filter(i => !i.alreadyClicked);
      this.unread = notifies.filter(i => !i.alreadyRead);
      this.hasNoItems = !(notifies.length > 0);
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    this.destroy$.next();
    this.destroy$.complete();
  }

  onItemClick(notify: Notification, event: any): void {
    if (!notify.url) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (!notify.alreadyRead || !notify.alreadyClicked) {
      this.store.dispatch(actionNotificationUpdateOne({
        update: {
          id: notify.id,
          changes: { alreadyRead: true, alreadyClicked: true }
        }
      }));
      if (!notify.alreadyRead) {
        this.notificationService.markAsRead([notify]);
      }
      if (!notify.alreadyClicked) {
        this.notificationService.markAsClicked([notify]);
      }
    }
  }

  intervalUpdate() {
    interval(5 * 60 * 1000).pipe(
      timeInterval(),
      mergeMap(() => this.notificationService.refresh()),
      takeUntil(this.destroy$)
    ).subscribe((res) => {
      if (res.notifies.length > 0) {
        const first = res.notifies[0];
        const notifyPrefix = this.translate.instant('notification.new_notification');
        this.alertService.info(`${notifyPrefix}: ${first.content}`);
        this.store.dispatch(actionNotificationUnshift(res));
      }
    });
  }

  refresh(event: any): void {
    event.stopPropagation();
    event.preventDefault();
    this.isLoading(true);
    this.notificationService.refresh()
      .pipe(take(1))
      .subscribe((res) => {
      this.isLoading(false);
      this.cd.detectChanges();
      if (res.notifies.length > 0) {
        this.store.dispatch(actionNotificationUnshift(res));
      }
    });
  }

  onMarkAllAsRead(event: any): void {
    event.stopPropagation();
    event.preventDefault();
    if (this.loading) {
      return; // Prevent click event on loading
    }
    this.isLoading(true);
    if (this.unread.length > 0) {
      const updates = this.unread.map(i => ({
          id: i.id,
          changes: {alreadyRead: true}
        }
      ));
      this.notificationService.markAsRead(this.unread)
      this.store.dispatch(actionNotificationUpdateMany({updates}));
    }
    this.isLoading(false);
  }

  onLoadMoreClick(event: any): void {
    this.isLoading(true);
    event.stopPropagation();
    event.preventDefault();
    this.notificationService.loadMore()
      .pipe(take(1))
      .subscribe((res) => {
      this.isLoading(false);
      this.store.dispatch(actionNotificationConcat(res));
    });
  }
}
