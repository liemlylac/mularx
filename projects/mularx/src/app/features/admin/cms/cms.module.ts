import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
  ],
  declarations: [
    PageComponent
  ]
})
export class CmsModule { }
