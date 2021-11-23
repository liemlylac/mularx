import { Component } from '@angular/core';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'mrx-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  version: string = env.versions.app;
  envName: string = env.appName;
  isProd: boolean = env.production;
}
