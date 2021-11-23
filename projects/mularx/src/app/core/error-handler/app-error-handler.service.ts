import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

import { AlertService } from '../alerts/alert.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(
    private alertService: AlertService,
  ) {
    super();
  }

  handleError(error: any | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if (!environment.production) {
      displayMessage += ' See console for details.';
    }

    this.alertService.error(displayMessage);

    super.handleError(error);
  }
}
