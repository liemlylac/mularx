import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting/setting.component';
import { GeneralComponent } from './general/general.component';
import { CachesComponent } from './caches/caches.component';



@NgModule({
  declarations: [
    SettingComponent,
    GeneralComponent,
    CachesComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
  ]
})
export class SettingModule { }
