import { Location, PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GoogleAnalyticsService } from './google-analytics.service';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private url$ = new ReplaySubject<string>(1);
  private baseHref: string;

  currentUrl$ = this.url$.pipe(map(url => this.stripSlashes(url)));
  currentPath$ = this.currentUrl$.pipe(
    map(url => (url.match(/[^?#]*/) || [])[0]),
    tap(path => this.gaService.locationChanged(path)),
  )
  constructor(
    private location: Location,
    private platformLocation: PlatformLocation,
    private gaService: GoogleAnalyticsService,
  ) {
    this.url$.next(location.path(true));
    this.location.subscribe(state => {
      return this.url$.next(state.url || '');
    });

    this.baseHref = platformLocation.getBaseHrefFromDOM();
  }

  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/,'$1');
  }

  goExternal(url: string) {
    window.location.assign(url);
  }

  replace(url: string) {
    window.location.replace(url);
  }

  getBaseHref() {
    return this.baseHref;
  }
}
