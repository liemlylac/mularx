// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'develop',
  production: false,
  test: false,
  i18nPrefix: '',
  apiUrl: 'mock',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies["@angular/core"],
    material: packageJson.dependencies["@angular/material"],
    materialIcons: packageJson.dependencies["material-icons"],
    ngrx: packageJson.dependencies["@ngrx/store"],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    translate: packageJson.dependencies["@ngx-translate/core"],
  },
  gaId: ''
};
