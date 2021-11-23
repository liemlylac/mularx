import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mrx-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
