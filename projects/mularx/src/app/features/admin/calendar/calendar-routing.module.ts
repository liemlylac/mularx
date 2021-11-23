import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const routers: Routes = [
  {
    path: '',
    component: CalendarComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {
}
