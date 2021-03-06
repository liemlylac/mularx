import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WindowToken } from './window';

@Injectable({ providedIn: 'root' })
export class GoogleAnalyticsService {
  private previousUrl: string;
  constructor(
    @Inject(WindowToken)
    private window: Window,
  ) {
    this.ga('create', environment.gaId, 'auto');
  }

  locationChanged(url: string) {
    this.sendPage(url);
  }

  sendPage(url: string) {
    if (url === this.previousUrl) {
      return;
    }
    this.previousUrl = url;
    this.ga('set', 'page', '/' + url);
    // noinspection SpellCheckingInspection
    this.ga('send', 'pageview');
  }

  sendEvent(source: string, action: string, label?: string, value?: number) {
    this.ga('send', 'event', source, action, label, value);
  }

  ga(...args: any[]) {
    const gaFn = (this.window as any)['ga'];
    if (gaFn) {
      gaFn(...args);
    }
  }
}
