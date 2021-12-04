import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mrx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  hide = true;
  form = this.fb.group({
    fullName: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    agree: [true, []],
  });

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onRegisterClick() {

  }
}
