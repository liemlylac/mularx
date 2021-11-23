import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';

const routers: Routes = [
  {
    path: '',
    component: SettingComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
