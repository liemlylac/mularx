import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './core/core.state';
import { selectSettingsTheme } from './core/settings/settings.selectors';

@Component({
  selector: 'mrx-root',
  template: `
    <div class="top-page"></div>
    <div [class]="'theme-wrapper ' + (theme$ | async)">
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  theme$: Observable<string> | undefined;

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
    this.theme$ = this.store.pipe(select(selectSettingsTheme));
  }
}
