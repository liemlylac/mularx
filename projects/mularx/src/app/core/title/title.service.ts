import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private translateService: TranslateService,
    private title: Title,
  ) {
  }

  setTitleOnRoute(snapShot: ActivatedRouteSnapshot, lazyTransService?: TranslateService) {
    let lastChild = snapShot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }

    const { title } = lastChild.data;
    const translate = lazyTransService || this.translateService;
    if (title) {
      translate.get(title).pipe(
        filter(translateTitle => translateTitle !== title)
      ).subscribe(translateTitle =>
        this.title.setTitle(`${translateTitle} - ${env.appName}`)
      );
    }
  }

  appendTitle(title: string) {
    this.title.setTitle(`${title} | ${this.title.getTitle()}`);
  }

  replaceTitle(title: string, suffix?: string) {
    this.title.setTitle(`${title}${suffix ? ' | ' + suffix : ''}`);
  }
}
