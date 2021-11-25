import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routers: Routes = [
  {
    path: '',
    redirectTo: 'pages',
  },
  {
    path: 'pages',
    component: PageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class CmsRoutingModule {
}
