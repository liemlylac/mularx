import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../componnets/component.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    ComponentModule,
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
  ]
})
export class MainModule {
}
