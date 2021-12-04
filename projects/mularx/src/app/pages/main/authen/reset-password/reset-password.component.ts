import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mrx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {
  form = this.fb.group({
    newPassword: ['', Validators.required],
    repeatNewPassword: ['', Validators.required]
  })
  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onResetClick() {

  }
}
