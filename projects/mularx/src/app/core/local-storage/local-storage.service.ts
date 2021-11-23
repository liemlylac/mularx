import { Injectable } from '@angular/core';

const APP_PREFIX = 'mrx_';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(APP_PREFIX)) {
        const stateKeys = storageKey.replace(APP_PREFIX, '')
          .toLocaleLowerCase()
          .split('.')
          .map((key) => key.split('-')
            .map((token, index) => index === 0
              ? token
              : token.charAt(0).toUpperCase() + token.slice(1)
            ).join('')
          );
        let currentStateRef = state;
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(
              localStorage.getItem(storageKey) || '{}'
            );
            return;
          }
          currentStateRef[key] = currentStateRef[key] || {};
          currentStateRef = currentStateRef[key];
        });
      }
      return state;
    }, {});
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`) || '{}');
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  }
}
