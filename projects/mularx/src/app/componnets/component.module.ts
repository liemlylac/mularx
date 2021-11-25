import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavItemIconPipe } from './nav-item/nav-item-icon.pipe';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NotifyAvatarPipe, NotifyUnread } from './notification/notifications.pipe';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    NavItemComponent,
    NavItemIconPipe,
    NotificationComponent,
    NotifyAvatarPipe,
    NotifyUnread,
  ],
  exports: [
    SharedModule,
    HeaderComponent,
    FooterComponent,
    NavMenuComponent,
    NavItemIconPipe,
    NotificationComponent,
    NotifyAvatarPipe,
    NotifyUnread,
  ],
})
export class ComponentModule {
}
