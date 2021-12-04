import { environment as env } from '../../../../environments/environment';

export interface Feature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation: string;
}

export const features: Feature[] = [
  {
    name: 'Angular',
    version: env.versions.angular,
    description: 'features.angular',
    github: 'https://github.com/angular/angular',
    documentation: 'https://angular.io/docs/ts/latest'
  },
  {
    name: 'Angular Cli',
    version: env.versions.angularCli,
    description: 'features.angular-cli',
    github: 'https://github.com/angular/angular-cli',
    documentation: 'https://cli.angular.io/'
  },
  {
    name: 'RxJS',
    version: env.versions.rxjs,
    description: 'features.rxjs',
    github: 'https://github.com/ReactiveX/RxJS',
    documentation: 'https://rxjs-dev.firebaseapp.com/',
  },
  {
    name: 'Angular Material',
    version: env.versions.material,
    description: 'features.angular-material',
    github: 'https://github.com/angular/material2/',
    documentation: 'https://material.angular.io/'
  },
  {
    name: 'Material Icons',
    version: env.versions.materialIcons,
    description: 'features.material-icons',
    github: 'https://github.com/marella/material-icons/',
    documentation: 'https://github.com/marella/material-icons#readme'
  },
  {
    name: 'NgRx',
    version: env.versions.ngrx,
    description: 'features.ngrx',
    github: 'https://github.com/ngrx/platform',
    documentation: 'https://ngrx.github.io/',
  },
  {
    name: 'i18n',
    version: env.versions.translate,
    description: 'features.translate',
    github: 'https://github.com/ngx-translate/core',
    documentation: 'http://www.ngx-translate.com/'
  },
  {
    name: 'Bootstrap',
    version: env.versions.bootstrap,
    description: 'features.bootstrap',
    github: 'https://github.com/twbs/bootstrap',
    documentation: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/',
  },
  {
    name: 'Font Awesome',
    version: env.versions.fontAwesome,
    description: 'features.fontawesome',
    github: 'https://github.com/FortAwesome/Font-Awesome',
    documentation: 'https://fontawesome.com/icons'
  },
  {
    name: 'Lazy-loading',
    description: 'features.lazy-loading',
    documentation: 'https://angular.io/guide/lazy-loading-ngmodules',
  },
  {
    name: 'Theming',
    description: 'features.theming',
    documentation: 'https://material.angular.io/guide/theming'
  },
  {
    name: 'Eslint',
    version: env.versions.eslint,
    description: 'features.eslint',
    github: 'https://github.com/eslint/eslint',
    documentation: 'https://eslint.org/docs/user-guide/getting-started'
  },
  {
    name: 'Typescript',
    version: env.versions.typescript,
    description: 'features.typescript',
    github: 'https://github.com/Microsoft/TypeScript',
    documentation: 'https://www.typescriptlang.org/docs/home.html'
  },
]
