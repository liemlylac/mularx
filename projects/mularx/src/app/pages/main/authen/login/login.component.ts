import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authLogin } from '../../../../core/core.module';
import { AppState } from '../../../../core/core.state';

@Component({
  selector: 'mrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  form = this.fb.group({
    username: ['admin', [Validators.required]],
    password: ['secretPwd#5!948', [Validators.required]],
    rememberMe: [true, []],
  });

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  onLoginClick() {
    this.store.dispatch(authLogin());
    this.router.navigate(['/admin/components']);
  }
}
