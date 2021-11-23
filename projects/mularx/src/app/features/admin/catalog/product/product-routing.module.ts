import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routers: Routes = [
  {
    path: '',
    component: ProductComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
}
