import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categories',
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
