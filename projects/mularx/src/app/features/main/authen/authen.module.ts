import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthenRoutingModule } from './authen-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenRoutingModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
})
export class AuthenModule {
}
