import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarItemIconPipe } from './sidebar/item/sidebar-item-icon.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/item/sidebar-item.component';
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
    SidebarComponent,
    SidebarItemComponent,
    SidebarItemIconPipe,
    NotificationComponent,
    NotifyAvatarPipe,
    NotifyUnread,
  ],
  exports: [
    SharedModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SidebarItemIconPipe,
    NotificationComponent,
    NotifyAvatarPipe,
    NotifyUnread,
  ],
})
export class ComponentModule {
}
