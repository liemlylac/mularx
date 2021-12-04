import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';
import {
  actionSettingsChangeLanguage,
  AppState,
  authLogout,
  selectIsAuthenticated,
  selectSettingsLanguage,
  selectSettingsTheme
} from '../../core/core.module';
import { NavigationNode, NavigationService } from '../../core/navigation';
import { Notification } from '../../core/notifications';

@Component({
  selector: 'mrx-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  @Output() toolbarClick = new EventEmitter<any>()

  appName: string = env.appName;
  logo = 'assets/logo.png';
  languages = ['en', 'vi'];
  isAuthenticated$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;
  topMenuNavs: NavigationNode[];
  isOpenSideNav = true;
  notifies: Notification[] = [];
  unreadNotifies: number = 0;

  constructor(
    private store: Store<AppState>,
    private navigationService: NavigationService,
  ) {
  }

  get toolbarIcon() {
    return this.isOpenSideNav ? 'menu_open' : 'menu';
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectSettingsTheme));
    this.navigationService.sidenavViews.pipe(
      filter((item) => !!item['sidenav']),
      map((item) => item.sidenav),
    ).subscribe((sidenav: MatSidenav) => {
      this.isOpenSideNav = sidenav.opened;
      sidenav.openedStart.pipe(
        takeUntil(this.destroy$),
      ).subscribe(() => {
        this.isOpenSideNav = true;
      });
      sidenav.closedStart.pipe(
        takeUntil(this.destroy$),
      ).subscribe(() => {
        this.isOpenSideNav = false;
      });
    });
    this.navigationService.navigationViews.pipe(
      filter(item => !!item['topMenu']),
      map(item => item.topMenu),
    ).subscribe((nodes: NavigationNode[]) => {
      this.topMenuNavs = nodes;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect(event: any) {
    this.store.dispatch(actionSettingsChangeLanguage({language: event.value}));
  }

  onToolbarClick(event: any) {
    this.toolbarClick.emit(event);
  }
}
