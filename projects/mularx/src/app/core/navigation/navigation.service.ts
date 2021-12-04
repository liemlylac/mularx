import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectIsAuthenticated } from '../auth/auth.selectors';
import { AppState } from '../core.state';
import { LocationService } from '../location.service';
import { CurrentNodes, NavigationNode, NavigationViews, SidenavViews } from './navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  sidenavViews: Observable<SidenavViews> = of({});
  navigationViews: Observable<NavigationViews> = of({});
  currentNodes: Observable<CurrentNodes>;

  isAuthenticated$: Observable<boolean> | undefined;

  constructor(
    private location: LocationService,
    private store: Store<AppState>,
  ) {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  getAdminSidenav(): NavigationNode[] {
    return [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        url: '/admin/dashboard'
      },
      {
        title: 'Catalog',
        icon: 'grid_view',
        children: [
          {
            title: 'Categories',
            icon: 'category',
            url: '/admin/catalog/categories',
          },
          {
            title: 'Products',
            icon: 'folder',
            url: '/admin/catalog/products',
          },
        ]
      },
      {
        title: 'Sales',
        icon: 'attach_money',
        url: '/admin/sales',
      },
      {
        title: 'CRM',
        icon: 'contact_page',
        children: [
          {
            title: 'Customers',
            icon: 'supervisor_account',
            url: '/admin/customers',
          },
        ]
      },
      {
        title: 'Users & Roles',
        icon: 'manage_accounts',
        children: [
          {
            title: 'Users',
            icon: 'person',
            url: '/admin/users',
          },
          {
            title: 'Roles',
            icon: 'admin_panel_settings',
            url: '/admin/roles',
          }
        ]
      },
      {
        title: 'Settings',
        icon: 'settings',
        children: [
          {
            title: 'General',
            icon: 'settings',
            url: '/admin/settings/general',
          },
          {
            title: 'Manage caches',
            icon: 'cached',
            url: '/admin/settings/caches',
          },
        ]
      }
    ];
  }

  getMainNav(): NavigationNode[] {
    return [
      {
        title: 'Features',
        url: '/features'
      },
      {
        title: 'Pricing',
        url: '/pricing'
      },
      {
        title: 'About',
        url: '/about'
      },
    ];
  }

  getMainSidenav(): NavigationNode[] {
    const mainNav = this.getMainNav();
    return mainNav.concat([
      {
        title: 'Authenticate',
        icon: 'person',
        children: [
          {
            title: 'Login',
            url: '/auth/login',
          },
          {
            title: 'Register',
            url: '/auth/register',
          },
          {
            title: 'Forgot password',
            url: '/auth/forgot-password',
          },
        ]
      }
    ]);
  }
}
