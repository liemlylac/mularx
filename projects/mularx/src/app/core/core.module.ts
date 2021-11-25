import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../../environments/environment';
import { ComponentModule } from '../componnets/component.module';
import { AuthEffects } from './auth/auth.effects';
import { AppState, metaReducers, reducers, selectRouterState } from './core.state';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { NotificationsEffects } from './notifications/notifications.effects';
import { SettingsEffects } from './settings/settings.effects';
import { TitleService } from './title/title.service';
import { selectAuth, selectIsAuthenticated } from './auth/auth.selectors';
import { authLogin, authLogout } from './auth/auth.actions';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from './animations/route.animations';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AnimationsService } from './animations/animations.service';
import { selectSettingsLanguage, selectSettingsStickyHeader, selectSettingsTheme } from './settings/settings.selectors';
import { actionSettingsChangeLanguage } from './settings/settings.action';
import { windowProvider, WindowToken } from './window';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

export {
  selectAuth,
  selectIsAuthenticated,
  selectRouterState,
  selectSettingsTheme,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  actionSettingsChangeLanguage,
  authLogin,
  authLogout,
  routeAnimations,
  ROUTE_ANIMATIONS_ELEMENTS,
  AppState,
  AnimationsService,
  LocalStorageService,
  TitleService,
}

@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    FormsModule,
    ComponentModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,

    // NgRx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([
      AuthEffects,
      SettingsEffects,
      NotificationsEffects,
    ]),
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: 'MulaRx' }),

    // 3rd party
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: WindowToken, useFactory: windowProvider },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  exports: [
    // Angular
    FormsModule,
    ComponentModule,

    // Material
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,

    // 3rd party
    FontAwesomeModule,
    TranslateModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in RootModule');
    }
  }
}
