import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from '../miscellaneous/forbidden/forbidden.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'catalog',
        loadChildren: () => import('./catalog/catalog.module').then((m) => m.CatalogModule),
      },
      {
        path: 'sales',
        loadChildren: () => import('./sale/sale.module').then((m) => m.SaleModule),
      },
      {
        path: 'customers',
        loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
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
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
