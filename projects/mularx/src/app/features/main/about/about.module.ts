import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { LayoutModule } from '../../../layouts/layout.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    AboutRoutingModule,
  ],
  declarations: [
    AboutComponent
  ],
})
export class AboutModule {}
