import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private defaultConfig: MatSnackBarConfig = {
    duration: 3000,
    panelClass: 'main-alert-overlay',
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone,
    private readonly translate: TranslateService,
  ) {
  }

  private show(message: string, config: MatSnackBarConfig) {
    const dismissLabel = this.translate.instant('alert.dismiss');
    this.zone.run(() => this.snackBar.open(message, dismissLabel, {...this.defaultConfig, ...config}));
  }

  default(message: string, config = {}) {
    this.show(message, {
      ...{ duration: 2500, panelClass: 'default-alert-overlay'},
      ...config
    });
  }

  info(message: string, config: MatSnackBarConfig = {}) {
    this.show(message, {
      ...{ duration: 2500, panelClass: 'info-alert-overlay'},
      ...config
    });
  }

  success(message: string, config: MatSnackBarConfig = {}) {
    this.show(message, {
    ...{ duration: 2000, panelClass: 'success-alert-overlay'},
    ...config
    });
  }

  warn(message: string, config: MatSnackBarConfig = {}) {
    this.show(message, {
      ...{ duration: 5000, panelClass: 'warning-alert-overlay'},
      ...config
    });
  }

  error(message: string, config: MatSnackBarConfig = {}) {
    this.show(message, {
      ...{ duration: 7500, panelClass: 'error-alert-overlay'},
      ...config
    });
  }

}
