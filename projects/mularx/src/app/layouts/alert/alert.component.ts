import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlertService } from '../../core/alerts/alert.service';

@Component({
  selector: 'mrx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  constructor(
    private readonly alertService: AlertService,
  ) {
  }

  ngOnInit(): void {
  }

  default(message: string) {
    this.alertService.default(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  success(message: string) {
    this.alertService.success(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

}
