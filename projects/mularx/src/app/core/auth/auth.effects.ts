import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { AppState } from '../core.state';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { actionNotificationSetAll } from '../notifications/notifications.action';
import { authLogin, authLogout } from './auth.actions';


export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AppState>,
    private action$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  login = createEffect(
    () => this.action$.pipe(
      ofType(authLogin),
      tap(() => {
        this.localStorageService.setItem(AUTH_KEY, {
          isAuthenticated: true,
        });
      })
    ),
    { dispatch: false }
  );

  logout = createEffect(
    () => this.action$.pipe(
      ofType(authLogout),
      tap(() => {
        this.router.navigate(['']);
        this.store.dispatch(actionNotificationSetAll({ notifies: [] }));
        this.localStorageService.setItem(AUTH_KEY, {
          isAuthenticated: false,
        });
      })
    ),
    { dispatch: false }
  )
}
