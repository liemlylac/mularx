import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,

    // Core
    CoreModule,

    // App
    RootRoutingModule,
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent]
})
export class RootModule {}
