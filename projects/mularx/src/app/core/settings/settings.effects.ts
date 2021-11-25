import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { INIT, select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';
import { actionSettingsChangeTheme } from './settings.action';

import { State } from './settings.model';
import { selectSettingsLanguage, selectSettingsTheme } from './settings.selectors';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private translateService: TranslateService,
    private overlayContainer: OverlayContainer,
  ) {
  }

  setTranslateServiceLanguage = createEffect(
    () => {
      return this.store.pipe(
        select(selectSettingsLanguage),
        distinctUntilChanged(),
        tap((language) => this.translateService.use(language)),
      )
    },
    { dispatch: false }
  )

  updateTheme = createEffect(
    () =>
      merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
        withLatestFrom(this.store.pipe(select(selectSettingsTheme))),
        tap(([, effectiveTheme]) => {
          const classList =
            this.overlayContainer.getContainerElement().classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        })
      ),
    { dispatch: false }
  );
}
