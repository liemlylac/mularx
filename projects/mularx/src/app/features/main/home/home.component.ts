import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mrx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  appName: string = environment.appName;

  constructor() { }

  ngOnInit(): void {
  }

}
