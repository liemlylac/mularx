import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectIsAuthenticated } from '../core.module';
import { AppState } from '../core.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private store: Store<AppState>
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(selectIsAuthenticated));
  }
}
