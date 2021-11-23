import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from '../miscellaneous/forbidden/forbidden.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../authen/authen.module').then((m) => m.AuthenModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
        data: { title: 'Homepage' }
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
