import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'inventory',
        loadChildren: () => import('./inventory/inventory.module').then((m) => m.InventoryModule),
      },
      {
        path: 'attribute',
        loadChildren: () => import('./attribute/attribute.module').then((m) => m.AttributeModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
