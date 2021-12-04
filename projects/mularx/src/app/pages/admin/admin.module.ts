import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../componnets/component.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    ComponentModule,
  ],
  declarations: [
    AdminComponent,
  ],
  providers: []
})
export class AdminModule {}
