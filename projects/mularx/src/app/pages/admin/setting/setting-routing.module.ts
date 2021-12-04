import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CachesComponent } from './caches/caches.component';
import { GeneralComponent } from './general/general.component';
import { SettingComponent } from './setting/setting.component';

const routers: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent,
      },
    ],
  },
  {
    path: 'caches',
    component: CachesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class SettingRoutingModule {
}
