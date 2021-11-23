import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
  ],
  providers: []
})
export class AdminModule {}
