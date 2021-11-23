import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, ConnectableObservable, Observable, of } from 'rxjs';
import { map, publishReplay } from 'rxjs/operators';
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
    //this.currentNodes = this.getCurrentNodes();
  }

  private getCurrentNodes(navViews: Observable<NavigationViews>) {
    const currentNodes = combineLatest([
      navViews.pipe(map(views => this.computeUrlToNavNodesMap(views))),
      this.location.currentPath$
    ]).pipe(
      map(([navMap, url]) => {
        const matchSpecialUrls = /^api/.exec(url);
        if (matchSpecialUrls) {
          url = matchSpecialUrls[0];
        }
        return navMap.get(url) || { '': { view: '', url: url, nodes: [] } };
      }),
      publishReplay(1),
    );
    (currentNodes as ConnectableObservable<CurrentNodes>).connect();
    return currentNodes;
  }

  private computeUrlToNavNodesMap(navigation: NavigationViews) {
    const navMap = new Map<string, CurrentNodes>();
    Object.keys(navigation).forEach(view =>
      navigation[view].forEach(node => this.walkNodes(view, navMap, node))
    );
    return navMap;
  }

  private walkNodes(
    view: string,
    navMap: Map<string, CurrentNodes>,
    node: NavigationNode,
    ancestors: NavigationNode[] = []
  ) {
    const nodes = [node, ...ancestors];
    const url = node.url;

    if (url) {
      const cleanedUrl = url.replace(/\/$/, '');
      if(!navMap.has(cleanedUrl)) {
        navMap.set(cleanedUrl, {});
      }
      const navMapItem = navMap.get(cleanedUrl)!;
      navMapItem[view] = { url, view, nodes };
    }
    if (node.children) {
      node.children.forEach(child => this.walkNodes(view, navMap, child, nodes));
    }
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
            url: '/admin/catalog/categories',
          },
          {
            title: 'Products',
            children: [
              {
                title: 'Manage products',
                url: '/admin/catalog/products',
              },
              {
                title: 'Add product',
                url: '/admin/catalog/add',
              },
            ]
          },
          {
            title: 'Attribute',
            children: [
              {
                title: 'Manage attributes',
                url: '/admin/catalog/attributes',
              },
              {
                title: 'Add attribute',
                url: '/admin/catalog/attributes/add',
              },
            ]
          },
          {
            title: 'Inventory',
            children: [
              {
                title: 'Warehouses',
                url: '/admin/catalog/warehouses',
              },
              {
                title: 'Inventory',
                url: '/admin/catalog/inventory',
              },
            ]
          }
        ]
      },
      {
        title: 'Sales',
        icon: 'attach_money',
        children: [
          {
            title: 'Orders',
            children: [
              {
                title: 'Manage orders',
                url: '/admin/sale/orders',
              },
              {
                title: 'Add order',
                url: '/admin/sale/orders/add',
              },
            ]
          },
          {
            title: 'Invoices',
            children: [
              {
                title: 'Manage invoices',
                url: '/admin/sale/orders',
              },
              {
                title: 'Add invoice',
                url: '/admin/sale/invoices/add',
              },
            ]
          },
          {
            title: 'Shipments',
            children: [
              {
                title: 'Manage shipments',
                url: '/admin/sale/shipments',
              },
              {
                title: 'Add shipment',
                url: '/admin/sale/shipments/add',
              },
            ]
          },
          {
            title: 'Refund',
            children: [
              {
                title: 'Manage refunds',
                url: '/admin/sale/refunds',
              },
              {
                title: 'Add refund',
                url: '/admin/sale/refunds/add',
              },
            ]
          },
        ]
      },
      {
        title: 'CMS',
        icon: 'space_dashboard',
        children: [
          {
            title: 'Pages',
            children: [
              {
                title: 'Manage pages',
                url: '/admin/cms/pages',
              },
              {
                title: 'Add page',
                url: '/admin/cms/pages/add',
              }
            ]
          },
          {
            title: 'Blocks',
            children: [
              {
                title: 'Manage blocks',
                url: '/admin/cms/blocks',
              },
              {
                title: 'Add block',
                url: '/admin/cms/blocks/add',
              }
            ]
          },
          {
            title: 'Widgets',
            children: [
              {
                title: 'Manage widgets',
                url: '/admin/cms/widgets',
              },
              {
                title: 'Add widget',
                url: '/admin/cms/widgets/add',
              }
            ]
          }
        ]
      },
      {
        title: 'CRM',
        icon: 'contact_page',
        children: [
          {
            title: 'Customers',
            children: [
              {
                title: 'Manage customers',
                url: '/admin/customers',
              },
              {
                title: 'Add customer',
                url: '/admin/customers/add',
              }
            ]
          },
          {
            title: 'Customer\'s Groups',
            children: [
              {
                title: 'Manage groups',
                url: '/admin/customers/groups',
              },
              {
                title: 'Add group',
                url: '/admin/customers/groups/add',
              }
            ]
          }
        ]
      },
      {
        title: 'Users & Permissions',
        icon: 'manage_accounts',
        children: [
          {
            title: 'Users',
            url: '/admin/settings/users',
          },
          {
            title: 'Permissions',
            url: '/admin/settings/roles',
          }
        ]
      },
      {
        title: 'Settings',
        icon: 'settings',
        children: [
          {
            title: 'General settings',
            url: '/admin/settings/general',
          },
          {
            title: 'Manage caches',
            url: '/admin/settings/caches',
          },
        ]
      }
    ];
  }

  getSettingSidenav(): NavigationNode[] {
    return [
      {
        title: 'General',
        url: 'general',
      },
      {
        title: 'Catalog',
        children: [
          {
            title: 'Categories',
            url: '/admin/setting/catalog/categories',
          },
          {
            title: 'Products',
            url: '/admin/setting/catalog/products',
          }
        ]
      },
      {
        title: 'Sale',
        children: [
          {
            title: 'Order',
            url: '',
          },
          {
            title: 'Order status',
            url: '',
          },
          {
            title: 'Shipment methods',
            url: '',
          },
          {
            title: 'Payment methods',
            url: '',
          },
        ]
      },
      {
        title: 'CRM',
        children: [
          {
            title: 'Customers',
            url: '/admin/setting/crm/customers',
          },
        ]
      },
    ]
  }

  getMainNav(): NavigationNode[] {
    return [
      {
        title: 'Home',
        url: '/'
      },
      {
        title: 'Features',
        url: '/features'
      },
      {
        title: 'Pricing',
        url: '/plans'
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
