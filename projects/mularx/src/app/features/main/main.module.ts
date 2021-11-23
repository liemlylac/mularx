import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layout.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    MainRoutingModule,
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule {
}
