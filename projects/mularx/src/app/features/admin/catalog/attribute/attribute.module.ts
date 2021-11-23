import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeRoutingModule } from './attribute-routing.module';
import { AttributeComponent } from './attribute.component';

@NgModule({
  imports: [
    CommonModule,
    AttributeRoutingModule,
  ],
  declarations: [
    AttributeComponent
  ]
})
export class AttributeModule {
}
