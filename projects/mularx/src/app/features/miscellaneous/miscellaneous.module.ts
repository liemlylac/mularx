import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  imports: [ CommonModule, SharedModule ],
  declarations: [
    NotFoundComponent,
    ForbiddenComponent
  ],
  exports: [
    NotFoundComponent,
    ForbiddenComponent
  ]
})
export class MiscellaneousModule {
}
