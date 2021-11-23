const packageJson = require('../../../../package.json');

export const environment = {
  appName: 'Test',
  production: false,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies["@angular/core"],
    material: packageJson.dependencies["@angular/material"],
    materialIcons: packageJson.dependencies["material-icons"],
    ngrx: packageJson.dependencies["@ngrx/store"],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    translate: packageJson.dependencies["@ngx-translate/core"],
  }
};
