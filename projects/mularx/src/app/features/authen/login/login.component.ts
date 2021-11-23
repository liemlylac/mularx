import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authLogin } from '../../../core/auth/auth.actions';
import { AppState } from '../../../core/core.state';

@Component({
  selector: 'mrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
    this.router.navigate(['/admin/dashboard']);
  }
}
