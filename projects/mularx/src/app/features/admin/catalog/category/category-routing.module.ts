import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';

const routers: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {
}
