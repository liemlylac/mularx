import { NgModule } from '@angular/core';
import { LayoutModule } from '../../layouts/layout.module';
import { AuthenRoutingModule } from './authen-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    AuthenRoutingModule,
    LayoutModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
})
export class AuthenModule {
}
