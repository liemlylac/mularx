import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from '../miscellaneous/forbidden/forbidden.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./authen/authen.module').then((m) => m.AuthenModule)
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Homepage' }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' }
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent,
      },
      {
        path: '',
        component: HomeComponent,
        data: { title: 'Homepage' }
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
